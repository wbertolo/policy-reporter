class FSM {

	constructor(setOfStates, alphabet, initialState, finalStates, transitionF) {
		this.setOfStates = setOfStates;
		this.alphabet = alphabet;
		this.currentState = initialState;
		this.finalStates = finalStates;
		this.transitionF = transitionF;
	}

	modThree(input) {

		if (!input) return 'Not a valid input.';
		
		for (let symbol of input) {

			// Invalid symbol case.
			if (!this.alphabet.includes(symbol)) {
			  return 'Invalid input symbol. Valid symbols are 0 and 1';
			}

			const nextState = this.transitionF[this.currentState][symbol];
			
			if (nextState !== undefined) {
			  this.currentState = nextState;
			} else {
			  throw new Error(`No transition defined for state ${this.currentState} and input ${symbol}`);
			}
		}

		return this.currentState % 3; // Returns the result.

	}


}


function createModThreeFSM() {

	setOfStates = ['S0', 'S1', 'S2'];
	alphabet = ['0', '1'];
	initialState = 'S0';
	
	const finalStates = {
		S0: 0,
		S1: 1,
		S2: 2
	};

	const transitionF = {
		S0: { '0': 'S0', '1': 'S1' },
		S1: { '0': 'S2', '1': 'S0' },
		S2: { '0': 'S1', '1': 'S2' }
	  };

	return new FSM( setOfStates, alphabet, initialState, finalStates, transitionF );

}

const fsm = createModThreeFSM(); // set of states, alphabet, iState, accepting/final states, transition function
console.log('result of "1101" is', fsm.modThree('1101')); // Case 1 of initial example - Result should be 1
console.log('result of "1110" is', fsm.modThree('1110')); // Case 1 of initial example - Result should be 2
console.log('result of "1111" is', fsm.modThree('1111')); // Case 1 of initial example - Result should be 0
console.log('result of "110" is', fsm.modThree('110')); // Case 1 from the Standard Exercise - Result should be 0
console.log('result of "1010" is', fsm.modThree('1010')); // Case 2 from the Standard Exercise - Result should be 1
console.log('result of "2" is', fsm.modThree('2')); // A non binary number - Result should be false
console.log('result of "" is', fsm.modThree()); // A non binary number - Result should be false

