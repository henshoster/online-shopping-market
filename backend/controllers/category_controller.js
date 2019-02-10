const Controller = require("./controller");
/*
category controller
id int(15)
name varchar(30)
*/
class categoryController extends Controller {
  constructor() {
    super();
    this.searchTerm = "id";
  }

  createNew(req, res, next) {
    this.updateParams(res, req);
    const obj = {
      name: req.body.name
    };
    this.db.createNew(this.defaultCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.name ? (obj["name"] = req.body.name) : "";
    if (obj.name) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = categoryController;
