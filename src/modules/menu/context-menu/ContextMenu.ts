import { Module } from '../../../types/Module.ts';
import { Application } from '../../../types/Application.ts';

/**
 * The context menu module that handles updating the context items when a automata component is selected
 */
export class ContextMenu implements Module {
    // references the application
    protected app: Application | null = null;

    /**
     * Initializes the current module
     */
    initialize(app: Application): void {
        this.app = app;
        console.log('Initializing context menu');
    }
}
