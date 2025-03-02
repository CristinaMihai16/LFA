import { Simulation } from '../../../types/Simulation.ts';
import { Application } from '../../../types/Application.ts';
import { ModuleNames } from '../../../AppModules.ts';
import { HamburgerMenu } from '../../menu/hamburger-menu/HamburgerMenu.ts';
import { DrawerCategory } from '../../menu/hamburger-menu/views/DrawerCategory.ts';
import { DotsIcon } from '../../menu/hamburger-menu/icons/DotsIcon.ts';

/**
 * Handles doing the basic stuff for the finite automata simulations
 */
export abstract class AbstractFiniteAutomata implements Simulation {
    // holds the identifier of the category to which the available simulations will be added
    static menuId: string = 'finite-automata';

    // references the application
    protected app: Application | null = null;

    /**
     * Initializing this module and subscribing to the drawer menu for launching the simulation
     */
    initialize(app: Application): void {
        this.app = app;

        // getting the menu module in which we add the simulation
        const menu = app.getModule(ModuleNames.HamburgerMenu);
        // ensuring the module is connected to the application
        if (menu === null) return;
        // ensuring the category for finite automata is added to the drawer menu
        this.ensureCategoryExists(menu);
    }

    // the abstract simulation function that will be implemented by each simulation implementation
    abstract simulate(): void;

    /**
     * Ensures the category for finite automata exists inside the hamburger menu
     */
    protected ensureCategoryExists(menu: HamburgerMenu) {
        const category = menu.getCategory(AbstractFiniteAutomata.menuId);
        if (category === null) {
            menu.addCategory(new DrawerCategory({ id: AbstractFiniteAutomata.menuId, displayName: 'Finite Automata', icon: new DotsIcon() }));
        }
    }
}
