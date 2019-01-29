const express = require("express");
const router = express.Router();

const Controller = new (require("../controllers/costumer_controller"))();

router.get("/", (req, res, next) => Controller.getAll(req, res, next));
router.get("/:id", (req, res, next) => Controller.getById(req, res, next));
router.post("/", (req, res, next) => Controller.createNew(req, res, next));
router.put("/:id", (req, res, next) => Controller.update(req, res, next));
router.delete("/:id", (req, res, next) => Controller.delete(req, res, next));
module.exports = router;
