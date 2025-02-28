import { AppMenu } from './modules/menu/app-menu/AppMenu.ts';
import { ContextMenu } from './modules/menu/context-menu/ContextMenu.ts';
import { HamburgerMenu } from './modules/menu/hamburger-menu/HamburgerMenu.ts';

/**
 * Constant that hold the names of the modules
 */
export const ModuleNames = {
    AppMenu: 'app-menu',
    ContextMenu: 'context-menu',
    HamburgerMenu: 'hamburger-menu',
} as const;

/**
 * Holds the list of all the modules this application loads
 */
export const AppModules = {
    [ModuleNames.HamburgerMenu]: HamburgerMenu,
    [ModuleNames.AppMenu]: AppMenu,
    [ModuleNames.ContextMenu]: ContextMenu,
} as const;

/**
 * Returns the type that defines the all valid names for a module
 */
export type ModuleName = (typeof ModuleNames)[keyof typeof ModuleNames];

/**
 * Returns the type that defines all the module instances the application uses
 */
export type AppModule = InstanceType<(typeof AppModules)[keyof typeof AppModules]>;
