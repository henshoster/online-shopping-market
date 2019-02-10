const DataBaseConnector = require("../db/data-base-connector");

class Controller {
  constructor() {
    this.db = new DataBaseConnector();
    this.defaultCallBack = (error, results, fields) => {
      if (error) {
        throw error;
      } else {
        this.res.send(results);
      }
    };
    this.res;
    this.baseUrl;
  }

  updateParams(res, req) {
    this.res = res;
    this.baseUrl = req.baseUrl.slice(1);
  }

  getAll(req, res, next) {
    this.updateParams(res, req);
    if (!req.query.search) {
      this.db.getAll(this.defaultCallBack, this.baseUrl);
    } else {
      console.log("search " + req.query.search);
      this.db.getBySearch(
        this.defaultCallBack,
        this.baseUrl,
        this.searchTerm,
        req.query.search
      );
    }
  }

  getById(req, res, next) {
    this.updateParams(res, req);
    console.log(this.req);
    this.db.getById(this.defaultCallBack, this.baseUrl, req.params.id);
  }

  delete(req, res, next) {
    this.updateParams(res, req);
    this.db.delete(this.defaultCallBack, this.baseUrl, req.params.id);
  }
}

module.exports = Controller;
