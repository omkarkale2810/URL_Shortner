const express = require("express")
const router = express.Router();

const {handlegethomepage} = require("../controller/urlcontroller")

router.get("/" , handlegethomepage)

module.exports = router;