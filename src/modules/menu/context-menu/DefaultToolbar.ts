import './less/default-toolbar.less';

import { CustomElement } from '../../../core/CustomElement.ts';

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
}
