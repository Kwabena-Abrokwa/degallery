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
exports.AWS_BUCKET_NAME = exports.AWS_REGION = exports.AWS_SECRET_ACCESS_KEY = exports.AWS_ACCESS_KEY_ID = exports.DATABASE_URI = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const multer_1 = __importDefault(require("multer"));
const mongoose_1 = __importDefault(require("mongoose"));
const UsersRoute_1 = __importDefault(require("./api/version1/Routes/UsersRoute"));
//initiating express instance
const app = (0, express_1.default)();
//.env configuration
dotenv_1.default.config();
//middlewares to be applied
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//middleware to handle errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        res.status(400).send({
            success: false,
            message: "Something went wrong, please try again",
        });
    }
    else if (err instanceof multer_1.default.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            res.status(400).send({
                message: "File too large",
            });
        }
        if (err.code === "LIMIT_FIELD_COUNT") {
            res.status(400).send({
                message: "You can not upload more than one file",
            });
        }
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
            res.status(400).send({
                message: "File should be an image",
            });
        }
    }
    else {
        res.status(500).send({
            success: false,
            message: "Something went wrong, please try again",
        });
    }
});
//api routes to be used
app.use("/api/users", UsersRoute_1.default);
//env variables
const PORT = 8085 || process.env.PORT;
exports.DATABASE_URI = process.env.DATABASE_URI;
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
exports.AWS_SECRET_ACCESS_KEY = process.env
    .AWS_SECRET_ACCESS_KEY;
exports.AWS_REGION = process.env.AWS_REGION;
exports.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
//connect/listen to available port number and connect to MongoDb data
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default
        .connect(exports.DATABASE_URI)
        .then(() => {
        console.log(`Server running on Port ${PORT} Database connected successfully`);
    })
        .catch((error) => console.log(`Something went wrong ${error}`));
}));
