const Controller = require("./controller");
/*
cartItemController controller
id int(15)
product_id int(15)
quantity int(15)
total_price int(15)
shopping_cart_id int(15)
product_name varchar (new)

*/
class cartItemController extends Controller {
  constructor() {
    super();
    this.searchTerm = "shopping_cart_id";
  }

  createNew(req, res, next) {
    this.updateParams(res, req);
    const obj = {
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      total_price: req.body.total_price,
      shopping_cart_id: req.body.shopping_cart_id,
      product_name: req.body.product_name
    };
    this.db.createNew(this.defaultCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.product_id ? (obj["product_id"] = req.body.product_id) : "";
    req.body.quantity ? (obj["quantity"] = req.body.quantity) : "";
    req.body.total_price ? (obj["total_price"] = req.body.total_price) : "";
    req.body.product_name ? (obj["product_name"] = req.body.product_name) : "";

    req.body.shopping_cart_id
      ? (obj["shopping_cart_id"] = req.body.shopping_cart_id)
      : "";
    if (
      obj.product_id ||
      obj.quantity ||
      obj.total_price ||
      obj.shopping_cart_id ||
      obj.product_name
    ) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = cartItemController;
