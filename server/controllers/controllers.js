var Product = require("../models/data");
const axios = require("axios");

// Define the maximum number of items to fetch
let fetchedItems = []; // Initialize an array to store fetched items

const options = {
  method: "GET",
  url: "https://api-v2-sandbox.chimoney.io/v0.2/info/country-banks?countryCode=NG",
  headers: {
    accept: "application/json",
    "X-API-KEY":
      "3e035a408b0b60636e24921f2b8a439a01176f701b99d48a83652aa715ce5740",
  },
};

//Simple version, without validation or sanitation
module.exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};

module.exports.getBanks = (req, res) => {
  axios
    .request(options)
    .then(function (response) {
      // Add newly fetched items to the array

      // Send the current state of fetched items to the client
      res.json([response.data]);
    })
    .catch(function (error) {
      console.error(error);
      // Handle error and send appropriate response to client
      res.status(500).send("Internal Server Error");
    });
};
