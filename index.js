// Завдання 1
// Створіть HTML-сторінку з можливістю введення числового
// значення через кнопки (більше, менше).
// Користувач не повинен мати можливість друкувати текст або
// цифри. Число змінюється лише при натисканні на кнопки.

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const numberInput = document.getElementById("number");

let currentValue = 0;

decrementButton.addEventListener("click", () => {
	currentValue--;
	numberInput.value = currentValue;
});

incrementButton.addEventListener("click", () => {
	currentValue++;
	numberInput.value = currentValue;
});

// Завдання 3
// Створіть HTML-сторінку з блоками інформації, які відкри-
// ваються кліком по заголовку. Одночасно може бути розгорнутий  лише один блок інформації.

const infoTitles = document.querySelectorAll(".info-title");

infoTitles.forEach((title) => {
	title.addEventListener("click", () => {
		document.querySelectorAll(".info-content.active").forEach((content) => {
			content.classList.remove("active");
		});

		const content = title.nextElementSibling;
		content.classList.toggle("active");
	});
});
