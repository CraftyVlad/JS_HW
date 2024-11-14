function task1() {
    // 1
	const name = prompt("What is your name?");
	alert(`Hello, ${name}!`);

    // 2
	const birthYear = prompt("What year were you born in?");
	const age = 2024 - birthYear;
	alert(`You are ${age} years old.`);

    // 3
	const squareSide = prompt("Enter side length of a square:");
	const perimeter = squareSide * 4;
	alert(`Perimeter of square: ${perimeter}`);

    // 4
	const number = prompt("Enter a 3 digit number:");
	const palindrome = number.split("").reverse("").join("");
	alert(`Palindrome: ${palindrome}`);
}

function task2() {
    // 1
	const udsAmount = prompt("Enter amount in USD:");
	const currency = prompt(
		"Enter currency to convert to (EUR, UAN, AZN):"
	).toUpperCase();
	const rates = { EUR: 0.95, UAN: 41.22, AZN: 1.7 };
	const convertedAmount = udsAmount * (rates[currency] || 1);
	alert(`Your converted amount: ${convertedAmount} ${currency}`);

    // 2
	const purchaseAmount = prompt("Enter purchase amount:");
	let discount = 0;
	if (purchaseAmount >= 500) discount = 0.07;
	else if (purchaseAmount >= 300) discount = 0.05;
	else if (purchaseAmount >= 200) discount = 0.03;
	const totalAmount = purchaseAmount - purchaseAmount * discount;
	alert(`Your total amount: $${totalAmount}`);

    // 3
	const circleLength = prompt("Enter the circle's length:");
	const squarePerimeter = prompt("Enter the square's perimeter:");
	const diameter = circleLength / Math.PI;
	const side = squarePerimeter / 4;
	const fits = diameter <= side;
	alert(`Can the circle fit in the square? ${fits}`);
}

function task3() {
    // 1
	let calculation = true;
	while (calculation) {
		const num1 = parseFloat(prompt("Enter first number:"));
		const operator = prompt("Enter operator (+, -, *, /):");
		const num2 = parseFloat(prompt("Enter second number:"));
		let result;
		switch (operator) {
			case "+":
				result = num1 + num2;
				break;
			case "-":
				result = num1 - num2;
				break;
			case "*":
				result = num1 * num2;
				break;
			case "/":
				result =
					num1 / num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
				break;
		}
		alert(`Result: ${result}`);
		calculation = confirm("Do you want to continue calculating?");
	}

    // 2
	const number = prompt("Enter a number:");
	const shift = parseInt(
		prompt("Enter the number of digits to shift by:"),
		10
	);
	const shifted = number.slice(shift) + number.slice(0, shift);
	alert(`Shifted number: ${shifted}`);
}

function task4() {
    // 1
	const power = (base, exponent) => Math.pow(base, exponent);
	const base = prompt("Enter base number:");
	const exponent = prompt("Enter exponent:");
	alert(`Result: ${power(base, exponent)}`);

    // 2
	const calculate = (a, b, operator) => {
		switch (operator) {
			case "+":
				return a + b;
			case "-":
				return a - b;
			case "*":
				return a * b;
			case "/":
				return b !== 0 ? a / b : "Cannot divide by zero";
			default:
				return "Invalid operator";
		}
	};
	const num1 = parseFloat(prompt("Enter first number:"));
	const operator = prompt("Enter operator:");
	const num2 = parseFloat(prompt("Enter second number:"));
	alert(`Result: ${calculate(num1, num2, operator)}`);

    // 3
    const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
	const numbers = prompt("Enter 1-5 numbers, separated by commas:")
		.split(",")
		.map(Number);
	alert(`Sum: ${sum(...numbers)}`);

    // 4
    const range = (start, end, even) => {
		const result = [];
		for (let i = start; i <= end; i++) {
			if (even ? i % 2 === 0 : i % 2 !== 0) result.push(i);
		}
		return result;
	};
	const start = parseInt(prompt("Enter start of range:"), 10);
	const end = parseInt(prompt("Enter end of range:"), 10);
	const even = confirm("Do you want even numbers?");
	alert(`Numbers: ${range(start, end, even).join(", ")}`);

    // 5
    const nextDay = (day, month, year) => {
		const date = new Date(year, month - 1, day);
		date.setDate(date.getDate() + 1);
		return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
	};
	const day = parseInt(prompt("Enter day:"), 10);
	const month = parseInt(prompt("Enter month (in numbers):"), 10);
	const year = parseInt(prompt("Enter year:"), 10);
	alert(`Next day: ${nextDay(day, month, year)}`);
}
