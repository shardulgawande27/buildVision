import express, { IRouter } from 'express';
import { register , login, verifyUserWithOtp, resendMailOtp} from "./authController";
import authMiddleware from "@/src/middlewares/authenticationChecker";
const router: IRouter = express.Router();


// register a new user
router.post("/register", register);
router.post("/login", login);
router.post("/verifyUserWithOtp", verifyUserWithOtp);
router.post("/resendMailOtp", resendMailOtp);


// login a user
// router.post("/login", login);

// get User Profile
// router.get("/", authMiddleware, getUser);

module.exports = router;