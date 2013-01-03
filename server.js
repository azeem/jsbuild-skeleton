var connect = require("connect");
console.log("Running server on port 8080")
connect.createServer(
	connect.static(__dirname + "/build")
).listen(8000);