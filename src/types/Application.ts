import { AppModules, ModuleName } from '../AppModules.ts';

/**
 * Describes the application interface that exposes its API to the public.
 * It receives a generic that describes the list of modules that were bundled into the application
 * This is implemented by the main program.
 *
 */
export interface Application {
    /**
     * Returns direct access to a specific module
     */
    getModule<T extends ModuleName>(name: T): InstanceType<(typeof AppModules)[T]> | null;

    /**
     * Runs the application
     */
    run(): void;
}
