"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    res.send("Welcome to the PHE Express Dev Server");
});
app.listen(8080, function () {
    console.log("Express running on port 8080");
});
