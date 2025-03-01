import { CustomElement } from './CustomElement.ts';
import { html } from '../helpers/dom.ts';

/**
 * The top level layout class that handles creating the application basic elements
 * Also, it returns access to these elements
 */
export class AppLayout extends CustomElement {
    // the name of the element bound to this component
    static element: string = 'app-layout';

    // returns access to the hamburger component
    get hamburgerMenu(): HTMLElement {
        return this.getChild('.top-hamburger');
    }

    // returns access to the top menu component
    get appMenu(): HTMLElement {
        return this.getChild('.top-app-menu');
    }

    // returns access to the top menu component
    get contextMenu(): HTMLElement {
        return this.getChild('.top-ctx-menu');
    }

    // returns access to the logo component
    get logo(): HTMLElement {
        return this.getChild('.top-logo');
    }

    // returns access to the application's body
    get appBody(): HTMLElement {
        return this.getChild('.app-body');
    }

    /**
     * The template for the application layout
     */
    template() {
        return html`<div class="top-toolbar">
                <div class="top-hamburger"></div>
                <div class="top-logo"></div>
                <div class="top-menu">
                    <div class="top-app-menu"></div>
                    <div class="top-ctx-menu"></div>
                </div>
            </div>
            <div class="app-body"></div>`;
    }

    /**
     * Returns a child element of this component
     */
    private getChild(selector: string) {
        const container = this.querySelector(selector);

        // ensuring the container is valid
        if (container === null) {
            throw new Error("Hamburger container wasn't created or has been deleted.");
        }

        return <HTMLElement>container;
    }
}
