/**
 * Declaring the interface for the CustomElementConstructor which will be passed over to the define method on customElements property
 */
interface CustomElementConstructor {
    new (...args: any[]): HTMLElement;
}

/**
 * This is the class that handles rendering the layout
 */
export abstract class CustomElement<T extends Record<string, any> = {}> extends HTMLElement {
    // override this name with the correct name of the element
    static element: string = 'missing-name';

    // @ts-ignore The constructor of this component which ensures it is registered in the customElements registry before being used
    constructor(protected props: T = {}) {
        // declaring the custom component as type of this component
        const CustomComponent = new.target as unknown as CustomElementConstructor & { element: string };
        CustomElement.registerComponent(CustomComponent);

        // calling parent
        super();

        // loading the template
        this.innerHTML = this.template();
    }

    /**
     * Ensures sure that the given custom element is registered
     */
    protected static registerComponent(CustomComponent: CustomElementConstructor & { element: string }): void {
        const name = CustomComponent.element;
        // Ensuring the component is registered as custom element before calling HTMLElement super
        if (!customElements.get(name)) {
            // ensuring the developer didn't forget to name his component
            if (name === CustomElement.element) {
                throw new Error('The component implementation must specify a static element name');
            }

            customElements.define(name, CustomComponent);
        }
    }

    /**
     * Returns the template for this element
     */
    abstract template(): string;
}
