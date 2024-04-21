import express, { IRouter } from 'express';
import { getProjects, postPorject } from './projectController';
const router: IRouter = express.Router();

router.get("/getproject", getProjects );
router.post("/postProject", postPorject)


module.exports = router;