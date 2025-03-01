import './less/default-toolbar.less';

import { CustomElement } from '../../../core/CustomElement.ts';
import { DefaultToolbarProps } from './DefaultToolbarProps.ts';

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
