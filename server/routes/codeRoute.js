const express = require("express");
const router = express.Router();

const {codedetails} = require("../controllers/codeController.js");

router.post("/codedetails",codedetails);
module.exports = router;