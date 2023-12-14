const express = require("express");
const serverApp = express();
const port = 3000;

const callbackFunction = function (req, res) {
  res.send(`
    <h1>chicoss</h1>
    <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <h2>Home</h2>
  `);
};

serverApp.get("/", callbackFunction);
serverApp.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

serverApp.listen(port, () => {
  console.log(`Server running on url http://localhost:${port}`);
});
