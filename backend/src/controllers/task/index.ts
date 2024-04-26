import express, {IRouter} from 'express';
import {getTask, postTask} from './taskController';
const router: IRouter = express.Router();

router.get("/getTask", getTask);
router.post("/postTask", postTask);

module.exports = router;
