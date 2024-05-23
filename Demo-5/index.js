const http = require("http");
const fs = require("node:fs");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	console.log(req.url);
	res.setHeader("Content-Type", "text/html");
	if (req.url == "/") {
		res.end("<h1>HomePage: Vishal Padhariya</h1>");
	} else if (req.url == "/about") {
		res.end("<h1>AboutPage: Vishal Padhariya</h1>");
	} else if (req.url == "/contact") {
		res.end("<h1>ContactPage: Vishal Padhariya</h1>");
	} else {
		res.statusCode = 200;
		const data = fs.readFileSync("404.html");
		res.end(data.toString());
	}
});

server.listen(port, () => {
	console.log(`Server is listening on http://${host}:${port}`);
});
