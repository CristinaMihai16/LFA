import { Application } from './Application.ts';
import { DefaultToolbar } from '../modules/menu/context-menu/DefaultToolbar.ts';

/**
 * Defines the automata interface and the methods it exposes preserving its state
 */
export interface Automata {
    /**
     * Returns the configuration of the current automata for later saving
     */
    getConfiguration(): Record<string, any>;

    /**
     * Runs the automata simulation
     */
    runSimulation(app: Application): void;

    /**
     * Returns the new toolbar needed for running the automata simulation
     */
    getContextBar(): DefaultToolbar;
}
