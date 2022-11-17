import express, {
	ErrorRequestHandler,
	NextFunction,
	Request,
	Response,
} from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import mongoose from "mongoose";
import UsersRoute from "./api/version1/Routes/UsersRoute";

//initiating express instance
const app = express();

//.env configuration
dotenv.config();

//middlewares to be applied
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware to handle errors
app.use(
	(
		err: ErrorRequestHandler,
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		if (err instanceof SyntaxError) {
			res.status(400).send({
				success: false,
				message: "Something went wrong, please try again",
			});
		} else if (err instanceof multer.MulterError) {
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
		} else {
			res.status(500).send({
				success: false,
				message: "Something went wrong, please try again",
			});
		}
	}
);

app.get("/", (req: Request, res: Response) => {
	res.send("Hi");
});

//api routes to be used
app.use("/api/users", UsersRoute);

//env variables
const PORT = (process.env.PORT as string) || 8085;
export const DATABASE_URI: string = process.env.DATABASE_URI as string;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID as string;
export const AWS_SECRET_ACCESS_KEY = process.env
	.AWS_SECRET_ACCESS_KEY as string;
export const AWS_REGION = process.env.AWS_REGION as string;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME as string;

//connect/listen to available port number and connect to MongoDb data
app.listen(PORT, async () => {
	await mongoose
		.connect(DATABASE_URI)
		.then(() => {
			console.log(
				`Server running on Port ${PORT} Database connected successfully`
			);
		})
		.catch((error) => console.log(`Something went wrong ${error}`));
});
