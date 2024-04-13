const router = require("express").Router();
const usersRoute = require("@/src/controllers/users")
const pmcRoute = require("@/src/controllers/pmc")

router.use("/users", usersRoute);
router.use("/pmc", pmcRoute);


module.exports = router;



