const db = require("../models");

// Methods for userController
module.exports = {
  // Finding all holdings
  findAllHoldings: function (req, res) {
    db.Holding
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Finding unique holding
  findHoldingById: function (req, res) {
    db.Holding
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Add holding
  create: function (req, res) {
    db.Holding
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Change holding
  update: function (req, res) {
    db.Holding
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Delete Holding
  remove: function (req, res) {
    db.Holding
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};