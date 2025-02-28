/**
 * This is the class that handles rendering the layout
 */
export class AbstractComponent extends HTMLElement {
    /**
     * Registers a custom element in the DOM
     */
    static register(name: string, component: any) {
        customElements.define(name, component);
    }
}
