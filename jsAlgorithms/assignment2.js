function convertToRoman(num) {
	let ones = num % 10;
	const tens = (num % 100) - ones;
	let numTens = tens / 10;
	const hund = (num % 1000) - tens - ones;
	let numHund = hund / 100;
	const thou = (num % 10000) - hund - tens - ones;
	let numThou = thou / 1000;

	let romanNum = '';

	const M = 1000;
	const CM = 900;
	const D = 500;
	const CD = 400;
	const C = 100;
	const XC = 90;
	const L = 50;
	const XL = 40;
	const X = 10;
	const IX = 9;
	const V = 5;
	const IV = 4;
	const I = 1;

	// console.log(ones, numTens, numHund, numThou);

	while (numThou > 0) {
		romanNum = romanNum + 'M';
		numThou--;
	}
	while (numHund > 0) {
		if (numHund == 9) {
			romanNum = romanNum + 'CM';
			numHund -= 9;
		} else if (numHund >= 5) {
			romanNum = romanNum + 'D';
			numHund -= 5;
		} else if (numHund == 4) {
			romanNum = romanNum + 'CD';
			numHund -= 4;
		} else {
			romanNum = romanNum + 'C';
			numHund--;
		}
	}
	while (numTens > 0) {
		if (numTens == 9) {
			romanNum = romanNum + 'XC';
			numTens -= 9;
		} else if (numTens >= 5) {
			romanNum = romanNum + 'L';
			numTens -= 5;
		} else if (numTens == 4) {
			romanNum = romanNum + 'XL';
			numTens -= 4;
		} else {
			romanNum = romanNum + 'X';
			numTens--;
		}
	}
	while (ones > 0) {
		if (ones == 9) {
			romanNum = romanNum + 'IX';
			ones -= 9;
		} else if (ones >= 5) {
			romanNum = romanNum + 'V';
			ones -= 5;
		} else if (ones == 4) {
			romanNum = romanNum + 'IV';
			ones -= 4;
		} else {
			romanNum = romanNum + 'I';
			ones--;
		}
	}
	console.log(romanNum);
	return romanNum;
}

convertToRoman(68);
