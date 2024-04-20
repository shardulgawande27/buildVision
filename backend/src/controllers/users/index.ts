import express, { IRouter } from 'express';
import { register , login, verifyUserWithOtp} from "./userController";
import authMiddleware from "@/src/middlewares/authMiddleware";
const router: IRouter = express.Router();


// register a new user
router.post("/register", register);
router.post("/login", login );
router.post("/verifyUserWithOtp", verifyUserWithOtp);


// login a user
// router.post("/login", login);

// get User Profile
// router.get("/", authMiddleware, getUser);

module.exports = router;