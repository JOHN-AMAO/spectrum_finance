var Product = require("../models/data");
const Bank = require("../models/data");
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
    .then(async function (response) {
      // Extract data from the response
      const bankData = response.data.data;

      try {
        // Iterate through the fetched bank data and save each entry to the database
        for (const bank of bankData) {
          const newBank = new Bank({
            id: bank.id,
            code: bank.code,
            name: bank.name,
          });
          // Save the bank to the database
          await newBank.save();
        }
        // Send a success response to the client
        res.json({ message: "Banks saved successfully." });
      } catch (error) {
        console.error("Error saving banks:", error);
        // Handle error and send appropriate response to client
        res.status(500).send("Error saving banks to the database.");
      }
    })
    .catch(function (error) {
      console.error("Error fetching banks:", error);
      // Handle error and send appropriate response to client
      res.status(500).send("Error fetching banks from the API.");
    });
};
