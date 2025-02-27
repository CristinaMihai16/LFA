import { Network, DataSet, Node, Edge } from "vis-network/standalone";

// Define types
interface TransitionMap {
    [key: number]: { [key: string]: number };
}

// Define nodes (states)
const nodes = new DataSet([
    { id: 0, label: "q0 (Start)", shape: "ellipse", color: "lightblue" },
    { id: 1, label: "q1", shape: "ellipse", color: "lightgreen" },
    { id: 2, label: "q2 (Final)", shape: "doublecircle", color: "lightcoral" }
]);

// Define edges (transitions)
const edges = new DataSet<Edge>([
    { from: 0, to: 1, label: "a", arrows: "to" },
    { from: 1, to: 2, label: "b", arrows: "to" },
    { from: 2, to: 0, label: "c", arrows: "to" }
]);

// Create network
const container = document.getElementById("network") as HTMLElement;
const data = { nodes, edges };
const options = { physics: false, edges: { font: { align: "top" } } };
const network = new Network(container, data, options);

setTimeout(() => {
    network.addNodeMode();
    network.on("selectNode", (data: Node) => {
        network.disableEditMode();
        network.addEdgeMode();
        data.id = 3;
        data.label = 'd';
        console.log("New node release");
        console.log(data);
        network.redraw();
    });
}, 1000)


// Automaton simulation function
function simulateAutomaton(inputString: string): void {
    let currentState = 0;
    const transitionMap: TransitionMap = {
        0: { "a": 1 },
        1: { "b": 2 },
        2: { "c": 0 }
    };

    let i = 0;
    function step() {
        if (i >= inputString.length) return;

        const symbol = inputString[i];
        const nextState = transitionMap[currentState]?.[symbol];

        if (nextState !== undefined) {
            nodes.update([{ id: currentState, color: "lightblue" }]); // Reset previous state
            nodes.update([{ id: nextState, color: "yellow" }]); // Highlight active state

            currentState = nextState;
            i++;
            setTimeout(step, 1000); // Delay next transition
        }
    }

    step();
}

// Button click event
document.getElementById("simulate")?.addEventListener("click", () => {
    simulateAutomaton("abc");
});
