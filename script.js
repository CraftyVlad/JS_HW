document.getElementById("formatBtn").addEventListener("click", () => {
	const input = document.getElementById("jsonInput").value;
	const output = document.getElementById("jsonOutput");
	const invalidFormat = document.getElementById("invalidFormat");

	try {
		const parsedData = JSON.parse(input);
		const formattedJSON = JSON.stringify(parsedData, null, 4);
		output.textContent = formattedJSON;
	} catch (error) {
		invalidFormat.style.display = "block";
		console.log(error)
	}
});
