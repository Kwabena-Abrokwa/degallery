import Joi from "joi";

export const uploadImageValidation = (data: {}) => {
	const imageSchema = Joi.object({
		imageName: Joi.string().required(),
		imageContent: Joi.string().required(),
		image: Joi.optional().allow(""),
	});

	return imageSchema.validate(data);
};
