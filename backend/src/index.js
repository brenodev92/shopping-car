const expres = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cars = require("./routes/cars");
const login = require("./routes/login");

const app = expres();
const PORT = process.env.PORT || 3333;

mongoose.connect("mongodb://localhost/shoppingcar", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(expres.json());
app.use(cars);
app.use(login);
app.set("PORT", PORT);

module.exports = app;
