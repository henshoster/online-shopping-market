const Controller = require("./controller");
/*
paymentController controller
id int(15)
costumer_id int(15)
shopping_cart_id int(15)
total_price int(15)
city varchar(20)
street varchar(40)
delivery_date datetime
order_date datetime
last_4_payment int(4)
*/
class paymentController extends Controller {
  constructor() {
    super();
    this.searchTerm = "costumer_id";
  }

  createNew(req, res, next) {
    this.updateParams(res, req);
    const obj = {
      costumer_id: req.body.costumer_id,
      shopping_cart_id: req.body.shopping_cart_id,
      total_price: req.body.total_price,
      city: req.body.city,
      street: req.body.street,
      delivery_date: req.body.delivery_date,
      order_date: req.body.order_date,
      last_4_payment: req.body.last_4_payment
    };
    this.db.createNew(this.defaultCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.costumer_id ? (obj["costumer_id"] = req.body.costumer_id) : "";
    req.body.shopping_cart_id
      ? (obj["shopping_cart_id"] = req.body.shopping_cart_id)
      : "";
    req.body.total_price ? (obj["total_price"] = req.body.total_price) : "";
    req.body.city ? (obj["city"] = req.body.city) : "";
    req.body.street ? (obj["street"] = req.body.street) : "";
    req.body.delivery_date
      ? (obj["delivery_date"] = req.body.delivery_date)
      : "";
    req.body.order_date ? (obj["order_date"] = req.body.order_date) : "";
    req.body.last_4_payment
      ? (obj["last_4_payment"] = req.body.last_4_payment)
      : "";

    if (
      obj.costumer_id ||
      obj.shopping_cart_id ||
      obj.total_price ||
      obj.city ||
      obj.street ||
      obj.delivery_date ||
      obj.order_date ||
      obj.last_4_payment
    ) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = paymentController;
