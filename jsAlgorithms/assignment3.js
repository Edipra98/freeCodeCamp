function rot13(str) {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	let returnStr = [];
	str = str.split('');
	console.log(str);
	let shiftVal = 0;
	for (let i = 0; i < str.length; i++) {
		// console.log('inside i');
		for (let j = 0; j < alphabet.length; j++) {
			// // console.log('inside j');
			if (
				str[i] == '.' ||
				str[i] == ',' ||
				str[i] == ' ' ||
				str[i] == '?' ||
				str[i] == '!'
			) {
				returnStr.push(str[i]);
				break;
			} else if (str[i] == alphabet[j]) {
				shiftVal = j - 13;
				if (shiftVal < 0) {
					shiftVal = 26 - Math.abs(shiftVal);
					returnStr.push(alphabet[shiftVal]);
				} else {
					returnStr.push(alphabet[shiftVal]);
				}
			}
		}
	}

	returnStr = returnStr.join('');

	console.log(returnStr);

	return returnStr;
}

rot13('SERR PBQR PNZC');
