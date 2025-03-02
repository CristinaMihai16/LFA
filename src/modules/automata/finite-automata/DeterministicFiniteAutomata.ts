import { AbstractFiniteAutomata } from './AbstractFiniteAutomata.ts';
import { Application } from '../../../types/Application.ts';
import { ModuleNames } from '../../../AppModules.ts';
import { DrawerItem } from '../../menu/hamburger-menu/views/DrawerItem.ts';

/**
 * The deterministic finite automata simulation
 *
 * A DFA is a finite state machine where:
 * - each state has exactly one transition for each input symbol
 * - there are no ε (epsilon) transitions (empty string moves)
 * - the machine is in exactly one state at any given time
 */
export class DeterministicFiniteAutomata extends AbstractFiniteAutomata {
    /**
     * Letting the abstract implementation do the basic stuff
     */
    initialize(app: Application) {
        super.initialize(app);

        // subscribing this simulation to the finite automata category
        const category = app.getModule(ModuleNames.HamburgerMenu)?.getCategory(AbstractFiniteAutomata.menuId);

        // ensuring the category is defined
        if (category === null) return;

        category?.addItem(new DrawerItem({ displayName: 'Deterministic Finite Automata', onclick: () => this.simulate() }));
    }

    /**
     * Running the simulation
     */
    simulate(): void {
        this.app?.getModule(ModuleNames.HamburgerMenu)?.onToggleMenu();
        console.log('DeterministicFiniteAutomata simulate');
    }
}
