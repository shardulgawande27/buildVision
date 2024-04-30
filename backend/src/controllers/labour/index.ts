import express, { IRouter } from "express";
import { postLabourData, getLabourData } from "./labourController";
const router: IRouter = express.Router();

router.post("/postlabourdata", postLabourData);
router.get("/getlabourdata", getLabourData);

module.exports = router;
