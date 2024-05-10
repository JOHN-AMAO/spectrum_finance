const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const productRouter = require("./routes/route");

const app = express();

// Set up mongoose connection
const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }); // Include useNewUrlParser option

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", productRouter);

const port = 3001;

db.once("open", function () {
  console.log("Connected!");
  app.listen(port, () => {
    console.log("Server is up and running on port number " + port);
  });
});
