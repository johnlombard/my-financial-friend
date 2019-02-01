const router = require("express").Router();
const userController = require("../../../controllers/userController");

// Matches with "/api/user"
router
  .route("/users")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/users/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
