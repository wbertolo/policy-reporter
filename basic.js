function modThree(input) {
	intInput = parseInt(input, 2);
	console.log('int', intInput);
	return intInput % 3;
}

console.log(modThree('110'));
console.log(modThree('1101'));
console.log(modThree('1110'));
console.log(modThree('1111'));
