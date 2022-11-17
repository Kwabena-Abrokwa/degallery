"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const ImageController_1 = require("../Controller/ImageController");
const router = express_1.default.Router();
//this route is used to create stores and handles uploads
const storage = multer_1.default.memoryStorage();
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/webp") {
        cb(null, true);
    }
    else {
        cb(new multer_1.default.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};
const upload = (0, multer_1.default)({
    storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1000000 },
});
router.get("/getAllImages", ImageController_1.getAllImage);
router.post("/uploadNewImage", upload.single("image"), ImageController_1.uploadNewImage);
router.delete("deleteImage/:imageId", ImageController_1.deletImage);
exports.default = router;
