const fs = require("node:fs");

fs.readFile("demo.txt", "utf8", (err, data) => {
	console.log(err, data, "\n");
});

console.log("\nMyfile.txt reading process started...");
const myFile = fs.readFileSync("demo.txt");
console.log(myFile.toString());
console.log("Finished Myfile.txt reading process.\n");

console.log("Write myfile.txt...\n");
fs.writeFile("myfile.txt", "This is myfile data", () => {
	console.log("Data written to the file");
});
