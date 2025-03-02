import { html } from '../../../../helpers/dom.ts';
import { AbstractButton } from './AbstractButton.ts';

export class PlusButton extends AbstractButton {
    static element = 'plus-button';

    template(): string {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clip-rule="evenodd"
            />
        </svg> `;
    }
}
