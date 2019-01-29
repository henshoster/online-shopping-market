const Controller = require("./controller");
/*
product controller
id int(15)
name varchar(30)
category_id int(15)
price int(15)
image_src varchar(255)
*/
class productController extends Controller {
  constructor() {
    super();
    this.searchTerm = "name";
  }

  createNew(req, res, next) {
    this.updateParams(res, req);
    const obj = {
      name: req.body.name,
      category_id: req.body.category_id,
      price: req.body.price,
      image_src: req.body.image_src
    };
    this.db.createNew(this.defaultCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.name ? (obj["name"] = req.body.name) : "";
    req.body.category_id ? (obj["category_id"] = req.body.category_id) : "";
    req.body.price ? (obj["price"] = req.body.price) : "";
    req.body.image_src ? (obj["image_src"] = req.body.image_src) : "";
    if (obj.name || obj.category_id || obj.price || obj.image_src) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = productController;
