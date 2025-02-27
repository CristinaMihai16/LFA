import { AppMenu } from './modules/app-menu/AppMenu.ts';
import { ContextMenu } from './modules/context-menu/ContextMenu.ts';

/**
 * Constant that hold the names of the modules
 */
export const ModuleNames = {
    AppMenu: 'app-menu',
    ContextMenu: 'context-menu',
} as const;

/**
 * Holds the list of all the modules this application loads
 */
export const AppModules = {
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
