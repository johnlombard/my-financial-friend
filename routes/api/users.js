const router = require("express").Router();
const userController = require("../../controllers/userController");
const holdingController = require("../../controllers/holdingController");
// Matches with "/api/user"
router
  .route("/users")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("users/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/holdings")
  .get(holdingController.findAllHoldings)

router
  .route("/holdings/:id")
  .get(holdingController.findHoldingById)



module.exports = router;
