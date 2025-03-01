import { Module } from '../../../types/Module.ts';
import { Application } from '../../../types/Application.ts';
import { Logo } from './views/Logo.ts';

/**
 * Handles rendering the logo component
 */
export class AppLogo implements Module {
    initialize(app: Application): void {
        app.getLayout().logo.appendChild(new Logo());
    }
}
