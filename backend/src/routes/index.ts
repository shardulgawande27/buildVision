const router = require("express").Router();
const usersRoute = require("@/src/controllers/users");
const pmcRoute = require("@/src/controllers/pmc");
const homeRoute = require("@/src/controllers/home");
const projectRoute = require("@/src/controllers/projects");
const uploadRoute = require("@/src/controllers/upload");
const taskRoute = require("@/src/controllers/task");
const labourRoute = require("@/src/controllers/labour");
const authRoute = require("@/src/controllers/auth");
import { authenticationChecker } from "../middlewares/authenticationChecker";


router.use("/users", authenticationChecker() ,usersRoute);
router.use("/", authRoute);
router.use("/home", homeRoute);
router.use("/project", projectRoute);
router.use("/upload", uploadRoute);
router.use("/task", taskRoute);
router.use("/labourdetails", labourRoute);

module.exports = router;
    