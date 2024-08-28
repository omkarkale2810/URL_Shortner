const express = require("express")
const {handlegenerateshorturl,} = require("../controller/urlcontroller")
const router = express.Router();

router.route("/").post(handlegenerateshorturl)


module.exports = router;