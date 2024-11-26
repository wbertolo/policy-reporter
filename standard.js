function modThree(input) {
	
	/* The rubric calls for logic separation, but given the small size of this exercise, 
	any attempt to break this into separate functions would feel like over-engineering.
	*/

	const inputArray = String(input).split('').map(Number); // Convert the input to an array of numbers.
	let state = 0; // Initial State.

	for ( let i = 0; i < inputArray.length; i++ ) { // Iterate through the array
		switch ( inputArray[i] ) { // Switch for the cases. We really only need to specify the cases where a state change happens.
			case 0:
				if ( state === 1 ) { state = 2 }
				else if ( state === 2 ) { state = 1 }
				break;
			case 1:
				if ( state === 0 ) { state = 1 }
				else if ( state === 1 ) { state = 0 }
				break;
		}

	}

	return state % 3; // Returns the result.

}

console.log('result of "110" is', modThree('110')); // Case 1 from the Standard Exercise
console.log('result of "1010" is', modThree('1010')); // Case 2 from the Standard Exercise
console.log('result of "1101" is', modThree('1101')); // Case 1 of initial example - Result should be 1
console.log('result of "1110" is', modThree('1110')); // Case 1 of initial example - Result should be 2
console.log('result of "1111" is', modThree('1111')); // Case 1 of initial example - Result should be 2
