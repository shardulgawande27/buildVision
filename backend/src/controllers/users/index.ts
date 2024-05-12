import express, { IRouter } from 'express';
import { getUserDetails } from "./userController";
import authMiddleware from "@/src/middlewares/authenticationChecker";
const router: IRouter = express.Router();


// register a new user
router.get("/user-details", getUserDetails);


module.exports = router;