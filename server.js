const express = require("express");

const app = express();

// use middleware to get "request-method" and "request-url"
app.use((req, res, next) => {
	console.log(`Request Method - ${req.method}\nRequest URL - ${req.url}`);
	next();
});

app.get("/", (req, res) => {
	res.send("Hello, Middleware!");
});

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}`);
});
