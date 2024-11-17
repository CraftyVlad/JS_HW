// 1
const car = {
	manufacturer: "Toyota",
	model: "Camry",
	year: 2022,
	averageSpeed: 60,

	displayInfo() {
		return `Manufacturer: ${this.manufacturer}, Model: ${this.model}, Year: ${this.year}, Avg. speed: ${this.averageSpeed}`;
	},

	calculateTravelTime(distance) {
		const timeWithNoBreaks = distance / this.averageSpeed;
		const breaks = Math.floor(timeWithNoBreaks / 4);
		return timeWithNoBreaks + breaks;
	},
};

const carOutput = document.getElementById("carOutput");

function displayCarInfo() {
	carOutput.textContent = car.displayInfo();
}

function calculateTravelTime() {
	const distance = prompt("Enter distance in km:");
	const time = car.calculateTravelTime(Number(distance));
	carOutput.textContent = `Time required: ${time.toFixed(2)} hours`;
}

// 2
let shoppingList = [
	{ name: "Milk", quantity: 2, purchased: false },
	{ name: "Bread", quantity: 1, purchased: true },
	{ name: "Eggs", quantity: 12, purchased: false },
	{ name: "Beef", quantity: 1, purchased: true },
];

const shoppingListOutput = document.getElementById("shoppingListOutput");

function displayShoppingList() {
	const sortedList = shoppingList.sort((a, b) => a.purchased - b.purchased);
	shoppingListOutput.innerHTML = sortedList
		.map(
			(item) =>
				`${item.name}, ${item.quantity} - ${
					item.purchased ? "Purchased" : "Not purchased"
				}`
		)
		.join("<br>");
}

function addItemToList() {
	const name = prompt("Enter the product name:");
	const quantity = Number(prompt("Enter the quantity:"));

	const existingItem = shoppingList.find((item) => item.name === name);
	if (existingItem) {
		existingItem.quantity += quantity;
	} else {
		shoppingList.push({ name, quantity, purchased: false });
	}
	displayShoppingList();
}

function purchaseItem() {
	const name = prompt("Enter the product name to purchase:");
	const item = shoppingList.find((item) => item.name === name);
	if (item) {
		item.purchased = true;
		displayShoppingList();
	} else {
		alert("Product not found");
	}
}

// 3
const stylesArray = [
	{ name: "color", value: "blue" },
	{ name: "font-size", value: "20px" },
	{ name: "text-align", value: "center" },
	{ name: "text-decoration", value: "underline" },
];

function applyStyles() {
	let stylesString = stylesArray
		.map((style) => `${style.name}: ${style.value}`)
		.join("; ");

	let description = stylesArray
		.map((style) => `${style.name}: ${style.value}`)
		.join(", ");

	document.write(
		`<p style="${stylesString}">New text (Applied styles: ${description})</p>`
	);
}
