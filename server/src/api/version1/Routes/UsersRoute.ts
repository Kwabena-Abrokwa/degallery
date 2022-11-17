import express, { Request } from "express";
import multer from "multer";
import {
	deletImage,
	getAllImage,
	updateImageInfo,
	uploadNewImage,
} from "../Controller/ImageController";

const router = express.Router();

//this route is used to create stores and handles uploads
const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: any, cb: any) => {
	if (
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/png" ||
		file.mimetype === "image/webp"
	) {
		cb(null, true);
	} else {
		cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
	}
};

const upload = multer({
	storage,
	fileFilter: fileFilter,
	limits: { fileSize: 1000000 },
});

router.get("/getAllImages", getAllImage);

router.post("/uploadNewImage", upload.single("image"), uploadNewImage);

router.put("/updateImage/:id", upload.single("image"), updateImageInfo);

router.delete("deleteImage/:imageId", deletImage);

export default router;
