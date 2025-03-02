import { CustomElement } from '../../../../../core/CustomElement.ts';
import { html } from '../../../../../helpers/dom.ts';

export class RightColumn extends CustomElement {
    static element = 'right-column';

    /**
     * Returning the template for the right column
     */
    template(): string | null {
        return html`<div class="right-column-network"></div>
            <div class="right-column-log">
                <label>Output:</label>
                <div class="log-entry"></div>
            </div>`;
    }

    /**
     * Returns the network container
     */
    getNetworkContainer(): HTMLElement {
        const container = this.querySelector('.right-column-network');
        if (container === null) throw new Error('The network container has disappeared.');

        return <HTMLElement>container;
    }

    /**
     * Returns access to the log entry container
     */
    getLogEntry(): HTMLElement {
        const logEntry = this.querySelector('.log-entry');
        if (logEntry === null) throw new Error('The log entry has disappeared.');

        return <HTMLElement>logEntry;
    }
}
