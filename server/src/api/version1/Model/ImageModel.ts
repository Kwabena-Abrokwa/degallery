import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("image", ImageSchema);
