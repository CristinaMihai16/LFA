import { AppModule, AppModules, ModuleName } from '../AppModules.ts';
import { Application } from '../types/Application.ts';

export class AbstractApplication implements Application {
    // holds the list of modules instantiated within the application
    private modules: Map<ModuleName, AppModule> = new Map();

    /**
     * The constructor receives the root element in which it should render its components
     */
    constructor(protected root: HTMLElement) {
        // doing nothing as the root property is already stored on this instances
    }

    /**
     * Returns access to a specific module identified by its name
     */
    getModule<T extends ModuleName>(name: T): InstanceType<(typeof AppModules)[T]> | null {
        return <InstanceType<(typeof AppModules)[T]>>this.modules.get(name) ?? null;
    }

    /**
     * Runs the application and initializez the modules
     */
    run() {
        // instantiating the modules
    }
}
