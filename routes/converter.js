const express = require("express");
const router = express.Router();

const ConverterController = require("../controllers/ConverterController");
const converterController = new ConverterController();

router.post("/", converterController.getResult());

module.exports = router;
