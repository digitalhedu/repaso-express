const express = require("express");

const path = require("path");

const app = express();

app.listen(3000,() => console.log("Bienvenido"));

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname,"views"));

// MIDDLEWARES APLICATION

app.use(express.static(path.resolve(__dirname,"../public")));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

// ROUTE MIDDLEWARES

app.use(require("./routes/main"));

app.use("/task",require("./routes/task"));

app.use("/user",require("./routes/user"));