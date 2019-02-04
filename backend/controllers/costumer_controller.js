const Controller = require("./controller");
const jwt = require("jsonwebtoken");

/*
Costumer controller
id int(11)
first_name varchar(15)
last_name varchar(15)
email varchar(40)
password varchar(100)
city varchar(20)
street varchar(40)
role int(1) , 0=costumer, 1=admin;
*/
class costumerController extends Controller {
  constructor() {
    super();
    this.registerCallBack = (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        console.log(this.id);
        const payload = { subject: this.id };
        const token = jwt.sign(payload, "shoster");
        this.res.status(200).send({ token });
      }
    };
    this.searchTerm = "first_name";
    this.id;
  }

  createNew(req, res, next) {
    this.res = res;
    this.baseUrl = "costumer";
    this.id = req.body.id;
    const obj = {
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      street: req.body.street,
      role: req.body.role
    };
    this.db.createNew(this.registerCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.first_name ? (obj["first_name"] = req.body.first_name) : "";
    req.body.last_name ? (obj["last_name"] = req.body.last_name) : "";
    req.body.email ? (obj["email"] = req.body.email) : "";
    req.body.password ? (obj["password"] = req.body.password) : "";
    req.body.city ? (obj["city"] = req.body.city) : "";
    req.body.street ? (obj["street"] = req.body.street) : "";
    req.body.role ? (obj["role"] = req.body.role) : "";
    if (
      obj.first_name ||
      obj.last_name ||
      obj.email ||
      obj.password ||
      obj.city ||
      obj.street ||
      obj.role
    ) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = costumerController;
