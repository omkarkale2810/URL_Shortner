const express = require("express")
const router = express.Router();
const {handlegenerateshorturl,handlegetanalytical} = require("../controller/urlcontroller")

router.route("/").post(handlegenerateshorturl)

router.route("/analytical/:shortid").get(handlegetanalytical)

module.exports = router;