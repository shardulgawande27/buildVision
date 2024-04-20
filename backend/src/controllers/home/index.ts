import express , {IRouter} from "express";
import authMiddleware from "@/src/middlewares/authMiddleware";
const router: IRouter = express.Router();
import { home } from "./homeConroller";

router.get("/", home)

module.exports = router;