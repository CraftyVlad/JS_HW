// Завдання 3
// Створіть HTML-сторінку з формою для введення стилізованого
// тексту. Після заповнення форми виведіть текст на екран відповідно  із зазначеними стилями.

document.getElementById("applyStyles").addEventListener("click", () => {
	const bold = document.getElementById("bold").checked;
	const underline = document.getElementById("underline").checked;
	const italics = document.getElementById("italics").checked;

	const alignment = document.querySelector(
		'input[name="align"]:checked'
	).value;
	const inputText = document.getElementById("inputText").value;

	const output = document.getElementById("output");
	output.style.fontWeight = bold ? "bold" : "normal";
	output.style.textDecoration = underline ? "underline" : "none";
	output.style.fontStyle = italics ? "italic" : "normal";
	output.style.textAlign = alignment;
	output.textContent = inputText;
});
