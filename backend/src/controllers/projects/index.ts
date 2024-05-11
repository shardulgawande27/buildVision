import express, { IRouter } from "express";
import { getProjects, postProject, getThisProject } from "./projectController";
const router: IRouter = express.Router();

router.get("/getproject", getProjects);
router.post("/postProject", postProject);
router.post("/thisproject", getThisProject);

module.exports = router;
