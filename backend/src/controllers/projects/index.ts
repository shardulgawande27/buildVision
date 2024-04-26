import express, { IRouter } from 'express';
import { getProjects, postProject } from './projectController';
const router: IRouter = express.Router();

router.get("/getproject", getProjects );
router.post("/postProject", postProject);


module.exports = router;