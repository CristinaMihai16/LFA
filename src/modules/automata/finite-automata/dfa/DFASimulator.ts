import { Network, DataSet, Node, Edge } from 'vis-network/standalone';
import { DFAAutomata } from './DFAAutomata.ts';

/**
 * Does the actual simulation of the Deterministic Finite Automata
 */
export class DFASimulator {
    /**
     * The constructor receives the Automata instance
     */
    constructor(protected automata: DFAAutomata) {
        // todo implement it
    }

    /**
     * Entry point for starting the simulation
     */
    start() {
        console.log('Simulation for DFA started');
    }

    /**
     * Invoked when the user creates a new node
     */
    onCreateNode = () => {
        console.log('Create node clicked');
        // @todo implement it
    };

    /**
     * Invoked when the user clicks the play button for the simulation
     */
    onPlaySimulation = () => {
        console.log('Playing the simulation');
        // @todo implement it
    };

    /**
     * Invoked when the user pauses the simulation
     */
    onPauseSimulation = () => {
        console.log('Pause simulation');
        // @todo implement it
    };
}
