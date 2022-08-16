function palindrome(str) {
	const punctuation = '!"# $%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
	str = str
		.split('')
		.filter((letter) => {
			return punctuation.indexOf(letter) === -1;
		})
		.join('')
		.toLowerCase();
	console.log(str);
	let midPoint = Math.floor(str.length);
	let arrSize = str.length - 1;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str[midPoint] && midPoint % 2 != 0) {
			return true;
		} else if (str[i] != str[arrSize]) {
			return false;
		}
		arrSize--;
	}
	return true;
}

const returnVal = palindrome('A man, a plan, a canal. Panama');

console.log(returnVal);
