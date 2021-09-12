const express = require('express')
const path = require('path')

const app = express()

app.get("/", (req, res)=> res.sendFile( __dirname + "/views/index.html"));

app.use("/public", express.static(__dirname + "/public"));