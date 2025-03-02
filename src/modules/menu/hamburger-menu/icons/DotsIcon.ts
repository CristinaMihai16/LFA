import { CustomElement } from '../../../../core/CustomElement.ts';
import { html } from '../../../../helpers/dom.ts';

/**
 * This component renders three dots on horizontal
 */
export class DotsIcon extends CustomElement {
    // return the name of the element
    static element = 'dots-icon';

    /**
     * Returns SVG content for this icon
     */
    template(): string | null {
        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path
                fill-rule="evenodd"
                d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clip-rule="evenodd"
            />
        </svg> `;
    }
}
