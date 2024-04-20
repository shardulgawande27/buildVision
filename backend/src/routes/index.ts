const router = require("express").Router();
const usersRoute = require("@/src/controllers/users")
const pmcRoute = require("@/src/controllers/pmc")
const homeRoute = require('@/src/controllers/home')

router.use("/users", usersRoute);
// router.use("/pmc", pmcRoute);
router.use("/home", homeRoute)


module.exports = router;



