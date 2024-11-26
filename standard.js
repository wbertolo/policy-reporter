function modThree(input) {
	intInputArray = input.split('');
	fsm = {
		state: 0,
		prevState: 0,
		value: 0,
		prevValue: 0
	}
	console.log(intInputArray);
	intInputArray.forEach((num) => {
		console.log(fsm.state);

	});

	// console.log('int', intInput);
	// return 1 % 3;
}

console.log(modThree('110'));

