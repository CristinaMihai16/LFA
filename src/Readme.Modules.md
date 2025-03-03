# Modules management

### What is a module?

A module is an implementation of the types/Module.ts interface. When the application starts, it iterates over the AppModules constant initialized in the AppModule.ts file and initialize each class in the order it is defined in the constants.

The purpose of using module is to have a composition architecture in which modules can access other modules for executing mixed logic.

### How can I create a module?

1. Crete a new directory inside src/modules/automata or src/modules/menu or any other directory inside src/modules depending on what the module does
2. Create a class that implements the types/Module.ts interface
3. Give the module a name inside the ModuleNames constant in the AppModules.ts file
4. Register the constructor of the module in the AppModules constant inside the AppModules.ts file
5. Put a console.log() call or a breakpoint in the browser's debugger inside the initialize function of the newly created module for ensuring that it was correctly instantiated by the application
