var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const bankSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;
