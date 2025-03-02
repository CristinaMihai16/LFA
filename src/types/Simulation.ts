import { Module } from './Module.ts';

/**
 * The interface that describes an implementation that can be simulated (for ex: an automata)
 */
export interface Simulation extends Module {
    /**
     * Starts this simulation
     */
    simulate(): void;
}
