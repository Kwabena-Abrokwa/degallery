"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const uploadImageValidation = (data) => {
    const imageSchema = joi_1.default.object({
        imageName: joi_1.default.string().required(),
        imageContent: joi_1.default.string().required(),
        image: joi_1.default.optional().allow(""),
    });
    return imageSchema.validate(data);
};
exports.uploadImageValidation = uploadImageValidation;
