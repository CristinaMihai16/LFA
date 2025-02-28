import './less/app-menu.less';

import { Module } from '../../types/Module.ts';
import { ModuleNames } from '../../AppModules.ts';
import { Application } from '../../types/Application.ts';

/**
 * Module that handles rendering the application menu
 */
export class AppMenu implements Module {
    // references the application
    protected app: Application | null = null;

    /**
     * Returns the name of this module
     */
    getName(): string {
        return ModuleNames.AppMenu;
    }

    /**
     * Initializes the current module
     */
    initialize(app: Application) {
        this.app = app;
        console.log('Initializing the application menu');
    }
}
