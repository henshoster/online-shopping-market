const express = require("express");
const router = express.Router();

const Controller = new (require("../controllers/costumer_controller"))();

router.post("/", (req, res, next) => Controller.createNew(req, res, next));

module.exports = router;
