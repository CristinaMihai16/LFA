import { Application } from './Application.ts';

/**
 * The Module interface that describes the methods that need to be implemented in order
 * for the module to correctly register into the application
 */
export interface Module {
    /**
     * Returns the name of the module
     */
    getName(): string;

    /**
     * Called by the application when the module needs to initialize
     * This is done after constructing the module and setting its configuration or state
     * It receives access to the application instance for interacting with other modules
     */
    initialize(app: Application): void;
}
