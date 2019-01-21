const router = require("express").Router();
const holdingRoutes = require("./holdings");

// User routes
router.use("/holdings", holdingRoutes);


module.exports = router;
