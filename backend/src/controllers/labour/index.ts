import express, { IRouter } from "express";
import {
  postLabourData,
  getLabourData,
  markAttendance,
} from "./labourController";
const router: IRouter = express.Router();

router.post("/postlabourdata", postLabourData);
router.get("/getlabourdata", getLabourData);
router.post("/labour/:Id", markAttendance);

module.exports = router;
