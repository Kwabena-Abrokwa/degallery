import Joi from "joi";

export const uploadImageValidation = (data: {}) => {
	const imageSchema = Joi.object({
		imageName: Joi.string().required(),
		imageContent: Joi.string().required(),
		image: Joi.string().required(),
	});

	return imageSchema.validate(data);
};
