// 1
function convertToCamelCase(cssProperty) {
	return cssProperty.replace(/-([a-z])/g, (_, letter) =>
		letter.toUpperCase()
	);
}

function runTask1() {
	const properties = ["font-size", "background-color", "text-align"];
	const camelCaseProperties = properties.map(convertToCamelCase);
	alert(`CamelCase properties: ${camelCaseProperties}`);
}

// 2
function isSpam(text) {
	const spamWords = [
		"100% безкоштовно",
		"збільшення продажів",
		"тільки сьогодні",
		"не видаляйте",
		"ххх",
	];
	const lowerText = text.toLowerCase();
	return spamWords.some((word) => lowerText.includes(word.toLowerCase()));
}

function runTask2() {
	const testString = "Сьогодні, тільки сьогодні, отримайте 100% безкоштовно!";
	alert(`Contains spam: ${isSpam(testString)}`);
}

// 3
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get radiusValue() {
		return this.radius;
	}

	set radiusValue(newRadius) {
		this.radius = newRadius;
	}

	get diameter() {
		return this.radius * 2;
	}

	calculateArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	calculateCircumference() {
		return 2 * Math.PI * this.radius;
	}
}

function runTask3() {
	const circle = new Circle(10);
	alert(`Radius: ${circle.radiusValue}`);
	alert(`Diameter: ${circle.diameter}`);
	alert(`Area: ${circle.calculateArea()}`);
	alert(`Circumference: ${circle.calculateCircumference()}`);
	circle.radiusValue = 20;
	alert(`Updated radius: ${circle.radiusValue}`);
}

// 5
class CssClass {
	constructor(name) {
		this.name = name;
		this.styles = {};
	}

	setStyle(property, value) {
		this.styles[property] = value;
	}

	removeStyle(property) {
		delete this.styles[property];
	}

	getCss() {
		const stylesString = Object.entries(this.styles)
			.map(([key, value]) => `${key}: ${value};`)
			.join(" ");
		return `.${this.name} { ${stylesString} }`;
	}

	applyToElement(element) {
		for (const [property, value] of Object.entries(this.styles)) {
			element.style[property] = value;
		}
	}
}

const myClass = new CssClass("css-class");
myClass.setStyle("color", "blue");
myClass.setStyle("fontSize", "20px");
myClass.setStyle("backgroundColor", "yellow");
myClass.setStyle("padding", "10px");
myClass.setStyle("border", "1px solid blue");

function applyStyles() {
	const paragraph = document.getElementById("styled-text");
	myClass.applyToElement(paragraph);
}

function logCss() {
	alert(myClass.getCss());
}
