import express, { IRouter } from 'express';
import { register , login} from "./userController";
import authMiddleware from "@/src/middlewares/authMiddleware";
const router: IRouter = express.Router();


// register a new user
router.post("/register", register);
router.post("/login", login );


// login a user
// router.post("/login", login);

// get User Profile
// router.get("/", authMiddleware, getUser);

module.exports = router;