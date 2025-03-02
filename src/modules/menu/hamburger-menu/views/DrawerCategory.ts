import { CustomElement } from '../../../../core/CustomElement.ts';
import { html } from '../../../../helpers/dom.ts';
import { DrawerItem } from './DrawerItem.ts';

/**
 * Defines the properties for the DrawerCategory component
 */
export type DrawerCategoryProps = {
    // references the identifier of the category
    id: string;
    // the name of the drawer category
    displayName: string;
    // the icon to be displayed inside the drawer category
    icon: CustomElement;
};

/**
 * Handles rendering a drawer category
 */
export class DrawerCategory extends CustomElement<DrawerCategoryProps> {
    // returns the name of the element that will be created in DOM
    static element = 'drawer-category';

    /**
     * Constructs a drawer category
     */
    constructor(props: DrawerCategoryProps) {
        super(props);

        // appending the icon element
        const category = this.querySelector('.drawer-cat');
        category?.appendChild(this.props.icon);

        // appending the name of the category
        const nameElement = document.createElement('div');
        nameElement.innerHTML = this.props.displayName;
        nameElement.classList.add('drawer-cat-name');
        category?.appendChild(nameElement);

        // attaching the toggle category option handler
        this.onclick = () => this.toggleOptions();
    }

    /**
     * The template for this element
     */
    template(): string | null {
        return html`<div class="drawer-cat"></div>
            <div class="drawer-cat-content"></div>`;
    }

    /**
     * Returns true if this category is identified by the given id
     */
    is(id: string) {
        return this.props.id === id;
    }

    /**
     * Appends an item to this category
     */
    addItem(item: DrawerItem) {
        const content = this.querySelector('.drawer-cat-content');
        content?.appendChild(item);
    }

    /**
     * Toggles category options when clicked
     */
    toggleOptions() {
        const content = this.querySelector('.drawer-cat-content');
        content?.classList.toggle('visible');
    }
}
