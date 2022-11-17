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
exports.s3BucketUploads = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const __1 = require("../../..");
const { S3 } = aws_sdk_1.default;
const s3BucketUploads = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const s3 = new S3();
    const param = {
        Bucket: __1.AWS_BUCKET_NAME,
        Key: `${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}-${file.originalname}`,
        Body: file.buffer,
    };
    yield s3.upload(param).promise();
    return param.Key;
});
exports.s3BucketUploads = s3BucketUploads;
