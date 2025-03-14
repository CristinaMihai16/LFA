/**
 * Defines the structure of a state
 */
export type State = {
    name: string;
    initial: boolean;
    final: boolean;
};

/**
 * This class represents the DFA model which holds the list of states in which the DFA can be found
 * and the transition table that allows transition from one state to another
 */
export class DFAModel {
    // holds the list of states
    public states: Array<State> = [];

    // holds the list of accepted symbols
    public symbols: Array<string> = [];

    // holds the list of transitions from one state to another
    public transitions: Array<{ from: string; to: string; character: string }> = [];

    // holds the index of the current state in which the model is found
    public currentState: number = 0;

    /**
     * The initial state can be only one for a DFA
     */
    getInitialState(): State {
        return this.states.filter(s => s.initial)[0];
    }


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //  Lista starilor finale
    //public get finalStates(): State[] {
     //   return this.states.filter(s => s.final);
   // }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



    /**
     * Returns the current state
     */
    getCurrentState(): State {
        return this.states[this.currentState];
    }

    /**
     * Returns a state identified by its name
     */
    getStateByName(name: string): State | null {
        return this.states.find(s => s.name === name) ?? null;
    }
}
