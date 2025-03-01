import { CustomElement } from '../../../../core/CustomElement.ts';
import { MenuGroup } from './MenuGroup.ts';

/**
 * The menu bar component in which all menu entries will be rendered
 */
export class MenuBar extends CustomElement {
    // the custom name of the resulting element
    static element = 'menu-bar';

    /**
     * Nothing to return here because this is just a container
     */
    template(): string {
        return '';
    }

    /**
     * Appends a new group to the menu bar
     */
    addGroup(group: MenuGroup): void {
        this.appendChild(group);
    }
}
