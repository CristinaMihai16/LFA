import { Network, DataSet, Node, Edge } from 'vis-network/standalone';
import { DFAAutomata } from './DFAAutomata.ts';
import { DFAMainView } from './views/DFAMainView.ts';

/**
 * Does the actual simulation of the Deterministic Finite Automata
 */
export class DFASimulator {
    // counts the number of states of this automata
    protected statesCounter = 0;

    // the simulator view
    protected mainView: DFAMainView | null = null;

    // holds the list of nodes
    protected nodes: Array<Node> = [{ id: this.statesCounter, label: 'q' + this.statesCounter + ' (Start)', shape: 'ellipse', color: 'lightgreen' }];

    // holds the list of transitions. the accepting character is saved on the label
    protected edges: Array<Edge> = [];

    // references the network of states
    protected network: Network | null = null;

    // references the current state in the simulation
    protected currentState: number = 0;

    // @ts-ignore
    protected currentTimeout: NodeJS.Timeout;

    /**
     * The constructor receives the Automata instance
     */
    constructor(protected automata: DFAAutomata) {}

    /**
     * Entry point for starting the simulation
     */
    start(mainView: DFAMainView) {
        // keeping track of the container
        this.mainView = mainView;
        // creating the network of states
        const { nodes, edges } = this;
        // setting up some display options for how to render the network
        const options = { physics: false, edges: { font: { align: 'top' } } };
        // instantiating the network of states
        this.network = new Network(mainView.getNetworkContainer(), { nodes, edges }, options);

        this.network.setOptions({
            interaction: {
                selectable: true,
                multiselect: true,
            },
            manipulation: {
                enabled: true,
                addEdge: this.edgeAdded,
                addNode: this.nodeAdded,
            },
        });

        /**
         * Subscribing to select node event
         */
        this.network.on('selectNode', (node: Node) => {
            console.log('Node selected:');
            console.log(node);
        });
    }

    /**
     * Invoked when the user clicks the play button for the simulation
     */
    onPlaySimulation = () => {
        const input = this.mainView!.getTestInput();
        if (input.length === 0) {
            alert('Please type the input for the DFA in the top left box.');
        }

        // clearing the output console
        this.mainView?.clearLog();

        // letting the UI know that we started the simulation
        this.mainView?.logMessage('Starting simulation for the following input: ' + input, 'success');

        // showing the start state
        this.highlightStateAndEdge(0);

        // letting the first state shine for a second
        this.currentTimeout = setTimeout(async () => {
            // processing the input character by character to see if we reach the final state
            for (let i = 0, len = input.length; i < len; i++) {
                const currentChar = input[i];

                this.mainView?.logMessage('Processing input character: ' + currentChar);
                const nextState = await this.transitionFunction(currentChar);

                // it found no state to move forward
                if (nextState === -1) {
                    this.network?.updateClusteredNode(this.currentState, { color: 'palevioletred' });
                    break;
                }

                this.currentState = nextState;
            }

            // checking if we reached the final state
            if (this.currentState === this.nodes.length - 1) {
                // letting the user know that the input sequence was successfully received
                this.mainView?.logMessage('Input accepted: ' + input, 'success');
            } else {
                this.mainView?.logMessage('Input rejected:' + input, 'error');
            }

            // resetting state after one second
            this.currentTimeout = setTimeout(() => this.onPauseSimulation(), 1000);
        }, 1000);
    };

    /**
     * Invoked when the user pauses the simulation
     */
    onPauseSimulation = () => {
        // stopping the next timeout function if exists
        clearTimeout(this.currentTimeout);
        // resetting the state to the initial value
        this.currentState = 0;
        // updating colors
        this.resetNodesColors();
    };

    /**
     * Handler that will be invoked when a new node will be added
     */
    protected nodeAdded = (nodeData: Node, callback: (arg: Node) => void) => {
        const newNode = { x: nodeData.x, y: nodeData.y, ...this.getNextStateData() };
        this.nodes.push(newNode);

        callback(newNode);

        // if there are more than two nodes (Initial and Final state) we update the intermediary ones
        if (this.nodes.length > 2) {
            // updating the last node because it is no longer final
            const previousNode = this.nodes[this.nodes.length - 2];
            previousNode.label = 'q' + previousNode.id;
            previousNode.color = 'lightblue';

            // keep in mind that these nodes get updated when the user drags them on the canvas
            this.network?.updateClusteredNode(previousNode.id!, { label: previousNode.label, color: previousNode.color });
        }
    };

    /**
     * Invoked when a new edge has been added
     */
    protected edgeAdded = (edgeData: Edge, callback: (edge: Edge) => void) => {
        // Accepting the new edge only if forwards to a new state
        if (edgeData.from !== edgeData.to) {
            // requesting the character that will validate next state
            const character = prompt('Enter the transition character:');
            if (!character) {
                alert('Aborting because no character was inserted');
                return;
            }

            edgeData.label = character;
            this.edges.push(edgeData);
            callback(edgeData);
        } else {
            alert('Self-loops are not allowed!');
        }
    };

    /**
     * Returns a new node definition
     */
    protected getNextStateData(): Node {
        return { id: ++this.statesCounter, label: 'q' + this.statesCounter + ' (Final)', shape: 'ellipse', color: 'lightgreen' };
    }

    /**
     * The transition function that handles moving on to the next state
     */
    protected transitionFunction = async (char: string): Promise<number> => {
        // returning a promise that will be resolved delayed for the animation to work
        return new Promise((resolve, reject) => {
            // we consider by default that the input character is invalid
            let nextState: number = -1;

            for (let i = 0, len = this.edges.length; i < len; i++) {
                const edge = this.edges[i];
                // checking if this edge starts from current state and leads to a new state when reading the input character
                if (Number(edge.from) === this.currentState && edge.label === char) {
                    // if we have a valid state we update the network for highlighting it
                    nextState = Number(edge.to);
                    this.highlightStateAndEdge(nextState);
                    break;
                }
            }

            // resolving next state for continuing simulation
            this.currentTimeout = setTimeout(() => resolve(nextState), 1000);
        });
    };

    /**
     * Highlights the current state and edge if given
     */
    protected highlightStateAndEdge(state: number) {
        this.resetNodesColors();
        this.network?.updateClusteredNode(state, { color: 'yellow' });
    }

    /**
     * Iterates through all nodes and resetes their colors
     */
    protected resetNodesColors() {
        for (let i = 0, len = this.nodes.length; i < len; i++) {
            const color = [0, this.nodes.length - 1].indexOf(i) === 0 ? 'lightgreen' : 'lightblue';
            this.network?.updateClusteredNode(i, { color });
        }
    }
}
