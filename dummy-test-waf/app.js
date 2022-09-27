require('@protectonce/agent');
const express = require('express');
const app = express();
const port = 4300;
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log("In Get Req");
    console.log("Header " + JSON.stringify(req.headers));
    console.log("Body " + JSON.stringify(req.query));

    res.send("Hello");
})
app.post("/", (req, res) => {
    console.log("In Post Req");
    console.log("Header " + JSON.stringify(req.headers));
    console.log("Body " + JSON.stringify(req.body));
    res.send()
})

app.listen(port, () => {
    console.log("Server Started on Port: " + port);
})