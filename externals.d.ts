/**
 * Declaring less module for TS to ignore less imports
 */
declare module '*.less' {
    const resource: { [key: string]: string };
    export = resource;
}
