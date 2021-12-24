const { response } = require("express");
const express = require ("express");
const http = require ('http');
var path = require ('path')
var fs = require ("fs");
const app = express();

var webPath = path.resolve(__dirname, "index.html");
app.use("/home", express.static(webPath), function (request, response, next){
    next();
});

app.use(function (request, response) {
    response.status(404);
    response.send('file not found');
})


console.log("Server listening on port 3000");
http.createServer(app).listen(3000);