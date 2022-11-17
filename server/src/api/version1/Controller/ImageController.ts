import { Request, Response } from "express";
import ImageModel from "../Model/ImageModel";
import { s3BucketUploads } from "../Services/AWSS3Services";
import { uploadImageValidation } from "../Validations/uploadImageValidation";

export const getAllImage = async (req: Request, res: Response) => {
	try {
		const imageData = await ImageModel.find();

		if (imageData) {
			return res.status(200).json(imageData);
		}
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		return res
			.status(401)
			.json({ status: false, message: "Something went wrong" });
	}
};

export const uploadNewImage = async (req: Request, res: Response) => {
	try {
		const imageName = req.body.imageName;
		const imageContent = req.body.imageContent;
		const { error } = uploadImageValidation(req.body);
		if (error)
			return res.status(401).json({ message: error.details[0].message });

		const file = req.file;

		let imageUploadedToAWS = "";

		if (file) {
			imageUploadedToAWS = await s3BucketUploads(file);
		}

		const imageId = Math.floor(1000 + Math.random() * 9000);

		const uploadImage = new ImageModel({
			imageId,
			imageName,
			image: imageUploadedToAWS,
			imageContent,
		});

		const save = await uploadImage.save();

		if (save) {
			return res
				.status(200)
				.json({ status: true, message: "New photo added to your gallery" });
		}
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		return res
			.status(401)
			.json({ status: false, message: "Something went wrong" });
	}
};

export const deletImage = async (req: Request, res: Response) => {
	try {
		const imageId = req.params.imageId;

		const findAndDeleteImage = await ImageModel.findOneAndDelete({
			imageId,
		});

		if (findAndDeleteImage) {
			return res
				.status(200)
				.json({ status: true, message: "Image deleted successfully" });
		}
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		return res
			.status(401)
			.json({ status: false, message: "Something went wrong" });
	}
};
