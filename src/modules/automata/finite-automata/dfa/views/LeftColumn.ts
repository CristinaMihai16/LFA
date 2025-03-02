import { CustomElement } from '../../../../../core/CustomElement.ts';
import { html } from '../../../../../helpers/dom.ts';

export class LeftColumn extends CustomElement {
    static element = 'left-column';

    /**
     * Returns the template for the left column of the simulation
     */
    template(): string | null {
        return html`<div class="test-string-container">
                <label>Test input:</label>
                <div class="test-input">
                    <input data-id="string-input" type="text" class="test-string-input" autocomplete="off" autofocus="autofocus" />
                </div>
            </div>
            <div class="bulk-testing-container">
                <label>Accepted inputs (one per line):</label>
                <textarea class="test-string-input" autocomplete="off" autofocus="autofocus" rows="7" cols="25"></textarea>

                <label>Rejecting inputs (one per line):</label>
                <textarea class="test-string-input" autocomplete="off" autofocus="autofocus" rows="7" cols="25"></textarea>
            </div>`;
    }

    /**
     * Returns the test input the user typed in
     */
    getTestInput(): string {
        return (<HTMLInputElement>this.querySelector('[data-id="string-input"]'))?.value ?? '';
    }
}
