function telephoneCheck(str) {
	if (str.length < 10) return false;
	let missingParen = false;
	if (str[2] == ' ') return false;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == '(') {
			missingParen = true;
			console.log('paren check');
		}
		console.log(str[i]);
		if (missingParen && str[i] == ')') {
			console.log('paren found');
			missingParen = false;
			break;
		}
		if (!missingParen && str[i] == ')') return false;
	}
	if (missingParen) return false;
	if (str[str.length - 1] == ')') return false;
	if (!Number.isInteger(parseInt(str[0])) && str[0] != '(') return false;
	str = str.replaceAll(' ', '');
	str = str.replaceAll('(', '');
	str = str.replaceAll(')', '');
	str = str.replaceAll('-', '');
	console.log(str.length);
	if (str.length > 11) return false;
	if (str[0] != '1' && str.length == 11) return false;
	for (let i = 0; i < str.length; i++) {
		let toInt = parseInt(str[i]);
		if (!Number.isInteger(toInt)) return false;
	}
	return true;
}

console.log(telephoneCheck('1 555)555-5555'));
//solved
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/telephone-number-validation
