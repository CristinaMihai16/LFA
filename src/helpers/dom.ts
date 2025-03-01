/**
 * Using a function for easy formatting html content because when prettier detects a tagged template
 * it formats it so using html as tag (https://prettier.io/blog/2020/08/24/2.1.0.html)
 */
export const html = String.raw;

/**
 * Helper function that handles removing all children for a given element
 */
export function removeAllChildren(element: HTMLElement) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
