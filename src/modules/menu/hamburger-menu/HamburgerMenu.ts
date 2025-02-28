import { Module } from '../../../types/Module.ts';
import { Application } from '../../../types/Application.ts';

/**
 * This class handles the hamburger menu implementation
 * Initially, it was implemented with the purpose of showing all the automata simulations
 * available in this simulator
 */
export class HamburgerMenu implements Module {
    /**
     * Returns the name of this module
     */
    getName(): string {
        return '';
    }

    /**
     * Initializes the current menu
     */
    initialize(app: Application): void {
        // @todo implement it
    }
}
