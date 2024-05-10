var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var controller = require("../controllers/controllers");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", controller.test);

router.get("/banks", controller.getBanks);

module.exports = router;
