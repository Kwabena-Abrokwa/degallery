"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ImageSchema = new mongoose_1.default.Schema({
    imageId: {
        require: true,
        type: String,
    },
    imageName: {
        require: true,
        type: String,
    },
    imageContent: {
        require: true,
        type: String,
    },
    image: {
        require: true,
        type: String,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("image", ImageSchema);
