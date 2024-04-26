const router = require("express").Router();
const usersRoute = require("@/src/controllers/users")
const pmcRoute = require("@/src/controllers/pmc")
const homeRoute = require('@/src/controllers/home')
const projectRoute = require('@/src/controllers/projects')
const taskRoute = require("@/src/controllers/task")

router.use("/users", usersRoute);
// router.use("/pmc", pmcRoute);
router.use("/home", homeRoute)
router.use("/project", projectRoute)
router.use("/task", taskRoute);


module.exports = router;



