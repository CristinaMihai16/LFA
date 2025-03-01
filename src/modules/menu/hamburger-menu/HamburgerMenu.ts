import { Module } from '../../../types/Module.ts';
import { Application } from '../../../types/Application.ts';
import { HamburgerIcon } from './views/HamburgerIcon.ts';

/**
 * This class handles the hamburger menu implementation
 * Initially, it was implemented with the purpose of showing all the automata simulations
 * available in this simulator
 */
export class HamburgerMenu implements Module {
    // references the application
    protected app: Application | null = null;

    /**
     * Initializes the current menu
     */
    initialize(app: Application): void {
        this.app = app;
        // adding the hamburger icon to the hamburger menu
        app.getLayout().hamburgerMenu.appendChild(new HamburgerIcon(this.onToggleMenu));
    }

    /**
     * Handler for opening the drawer menu
     */
    private onToggleMenu = () => {
        console.log('Toggling menu');
    };
}
