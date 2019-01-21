const router = require("express").Router();
const holdingController = require("../../../controllers/holdingController");

router
  .route("/holdings")
  .get(holdingController.findAllHoldings)
  .post(holdingController.create)

router
  .route("/holdings/:id")
  .get(holdingController.findHoldingById)
  .put(holdingController.update)
  .delete(holdingController.remove);




module.exports = router;
