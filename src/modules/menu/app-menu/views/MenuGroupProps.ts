import { MenuItem } from './MenuItem.ts';

/**
 * The properties that will be passed to the menu group elemement
 */
export type MenuGroupProps = {
    // holds the name of the entire group
    displayName: string;
    // holds the children of the group
    children: Array<MenuItem>;
};
