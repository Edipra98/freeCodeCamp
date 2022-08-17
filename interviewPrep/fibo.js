function fiboEvenSum(n) {
	let sum = 2;
	let fib = [1, 2];
	let i = 1;
	while (fib[i] < n) {
		i++;
		fib[i] = fib[i - 1] + fib[i - 2];
		if (fib[i] % 2 == 0) sum += fib[i];
	}
	return sum;
}

console.log(fiboEvenSum(10));
console.log(process.platform);
