import express, { IRouter } from "express";
import authMiddleware from "@/src/middlewares/authMiddleware";
import multer from "multer";
import path, { dirname } from "path";
const router: IRouter = express.Router();
// import { uplaodImage } from "./uploadController";

const index = __dirname.indexOf("\\backend\\");
const trimmedPath =
  index !== -1
    ? __dirname.slice(0, index + "\\backend\\".length - 1)
    : __dirname;

console.log(trimmedPath, "trim");

console.log(trimmedPath, "trim");

const uploadDir = path.resolve(__dirname, "public/img"); // Absolute path to the uploads directory

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, trimmedPath + "/public/img"); // Path to save uploaded files
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${ext}`); // Filename format
  },
});
const upload = multer({ storage: storage });

router.post("/uploadImage", upload.single("image"), async (req, res) => {
  let fileObj = req.file;
  console.log(fileObj); // This will log information about the uploaded file
  res.send("File uploaded successfully");
});

router.use("/uploads", express.static(uploadDir));

module.exports = router;
