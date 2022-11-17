"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletImage = exports.uploadNewImage = exports.getAllImage = void 0;
const ImageModel_1 = __importDefault(require("../Model/ImageModel"));
const AWSS3Services_1 = require("../Services/AWSS3Services");
const uploadImageValidation_1 = require("../Validations/uploadImageValidation");
const getAllImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageData = yield ImageModel_1.default.find();
        if (imageData) {
            return res.status(200).json(imageData);
        }
    }
    catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res
            .status(401)
            .json({ status: false, message: "Something went wrong" });
    }
});
exports.getAllImage = getAllImage;
const uploadNewImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageName = req.body.imageName;
        const imageContent = req.body.imageContent;
        const { error } = (0, uploadImageValidation_1.uploadImageValidation)(req.body);
        if (error)
            return res.status(401).json({ message: error.details[0].message });
        const file = req.file;
        let imageUploadedToAWS = "";
        if (file) {
            imageUploadedToAWS = yield (0, AWSS3Services_1.s3BucketUploads)(file);
        }
        const imageId = Math.floor(1000 + Math.random() * 9000);
        const uploadImage = new ImageModel_1.default({
            imageId,
            imageName,
            image: imageUploadedToAWS,
            imageContent,
        });
        const save = yield uploadImage.save();
        if (save) {
            return res
                .status(200)
                .json({ status: true, message: "New photo added to your gallery" });
        }
    }
    catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res
            .status(401)
            .json({ status: false, message: "Something went wrong" });
    }
});
exports.uploadNewImage = uploadNewImage;
const deletImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imageId = req.params.imageId;
        const findAndDeleteImage = yield ImageModel_1.default.findOneAndDelete({
            imageId,
        });
        if (findAndDeleteImage) {
            return res
                .status(200)
                .json({ status: true, message: "Image deleted successfully" });
        }
    }
    catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        return res
            .status(401)
            .json({ status: false, message: "Something went wrong" });
    }
});
exports.deletImage = deletImage;
