const express = require("express");
const router = express.Router();

const Login = new (require("../controllers/login"))();

router.post("/", (req, res, next) => Login.login(req, res, next));

module.exports = router;
