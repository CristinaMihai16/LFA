import { Module } from '../../types/Module.ts';
import { Application } from '../../types/Application.ts';
import { ModuleNames } from '../../AppModules.ts';

export class ContextMenu implements Module {
    getName(): string {
        return ModuleNames.ContextMenu;
    }

    initialize(app: Application): void {
        console.log('Initializing context menu');
    }
}
