const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const converterRoute = require("../routes/converter");

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/result", converterRoute);

module.exports = app;
