const Controller = require("./controller");
/*
shoppingCartController controller
id int(15)
costumer_id int(15)
production_date datetime
*/
class shoppingCartController extends Controller {
  constructor() {
    super();
    this.searchTerm = "costumer_id";
  }

  createNew(req, res, next) {
    this.updateParams(res, req);
    const obj = {
      costumer_id: req.body.costumer_id,
      production_date: req.body.production_date
    };
    this.db.createNew(this.defaultCallBack, this.baseUrl, obj);
  }

  update(req, res, next) {
    this.updateParams(res, req);
    const obj = {};
    req.body.costumer_id ? (obj["costumer_id"] = req.body.costumer_id) : "";
    req.body.production_date
      ? (obj["production_date"] = req.body.production_date)
      : "";
    if (obj.costumer_id || obj.production_date) {
      this.db.update(this.defaultCallBack, this.baseUrl, req.params.id, obj);
    }
  }
}

module.exports = shoppingCartController;
