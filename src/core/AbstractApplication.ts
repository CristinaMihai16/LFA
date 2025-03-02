import { AppModule, AppModules, ModuleName, ModuleNames } from '../AppModules.ts';
import { Application } from '../types/Application.ts';
import { AppLayout } from './AppLayout.ts';
import { Automata } from '../types/Automata.ts';

/**
 * This is the abstract application implementation that shadows a lot of under the hood logic
 * for allowing the child class to be more readable
 */
export class AbstractApplication implements Application {
    // holds the list of modules instantiated within the application
    protected modules: Map<ModuleName, AppModule> = new Map();

    // returns access to the layout UI component
    protected layout: AppLayout | null = null;

    // references the running automata
    protected activeAutomata: Automata | null = null;

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

    /**
     * Returns the Layout instance that allows injecting child elements in different areas of the application
     */
    getLayout(): AppLayout {
        if (this.layout === null) throw new Error('Layout needs to be created before it can be accessed.');

        return this.layout;
    }

    /**
     * Simulates the selected automata
     */
    simulateAutomata(automata: Automata) {
        this.activeAutomata = automata;
        // updating the context menu with the new buttons
        this.getModule(ModuleNames.ContextMenu)?.refreshToolbar(automata.getContextBar());
        this.activeAutomata.runSimulation(this);
    }
}
