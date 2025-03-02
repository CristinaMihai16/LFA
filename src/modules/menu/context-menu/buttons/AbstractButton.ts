import { CustomElement } from '../../../../core/CustomElement.ts';

/**
 * An abstract button class that implements the constructor for receiving the click handler
 */
export abstract class AbstractButton extends CustomElement {
    /**
     * The constructor receives the click handler which will be invoked when the user clicks the button
     */
    constructor(public onclick: VoidFunction) {
        super();
        // appending the ctx-btn class for styling
        this.classList.add('ctx-btn');
    }

    /**
     * Marks this button as selected
     */
    select() {
        this.classList.add('selected');
    }

    /**
     * Marks this button as not selected
     */
    unselect() {
        this.classList.remove('selected');
    }
}
