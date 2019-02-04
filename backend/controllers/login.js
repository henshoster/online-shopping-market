const DataBaseConnector = require("../db/data-base-connector");
const jwt = require("jsonwebtoken");

class Login {
  constructor() {
    this.db = new DataBaseConnector();
    this.loginCallBack = (error, results, fields) => {
      if (error) {
        console.log(error);
        throw error;
      } else {
        if (results.length === 0) {
          this.res.status(401).send({ error: "invaild id or password" });
        } else {
          if (results[0].password != this.req.body.password) {
            this.res.status(401).send({ error: "invaild id or password" });
          } else {
            const payload = { subject: this.req.body.id };
            const token = jwt.sign(payload, "shoster");
            this.res.status(200).send({ token });
          }
        }
      }
    };
    this.res;
    this.req;
    this.baseUrl = "costumer";
  }

  login(req, res, next) {
    this.res = res;
    this.req = req;
    this.db.getById(this.loginCallBack, this.baseUrl, req.body.id);
  }
}

module.exports = Login;
