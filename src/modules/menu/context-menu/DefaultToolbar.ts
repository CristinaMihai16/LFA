import './less/default-toolbar.less';

import { CustomElement } from '../../../core/CustomElement.ts';
import { AbstractButton } from './buttons/AbstractButton.ts';

/**
 * The properties for creating the default toolbar
 */
export type DefaultToolbarProps = {
    buttons: Array<CustomElement>;
};

/**
 * This default toolbar is displayed by the application at start
 * It should be extended by all simulations depending on what context options the simulation has
 */
export class DefaultToolbar extends CustomElement<DefaultToolbarProps> {
    static element = 'context-toolbar';

    constructor(props: DefaultToolbarProps) {
        super(props);
    }

    /**
     * Adding each button as child element to this component
     */
    template(): null {
        this.props.buttons.forEach((button: CustomElement) => this.appendChild(button));
        return null;
    }

    /**
     * Iterates through the list of buttons and returns the first found that has the same instance as the given constructor
     */
    getButton(Instance: typeof AbstractButton): AbstractButton | null {
        for (let i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i] instanceof AbstractButton) {
                return <AbstractButton>this.children[i];
            }
        }

        return null;
    }
}
