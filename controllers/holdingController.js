const db = require("../models");

// Methods for userController
module.exports = {
  findAllHoldings: function (req, res) {
    db.Holding
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findHoldingById: function (req, res) {
    db.Holding
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};