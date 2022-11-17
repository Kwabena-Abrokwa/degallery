import pkg from "aws-sdk";
import { AWS_BUCKET_NAME } from "../../..";
const { S3 } = pkg;

export const s3BucketUploads = async (file: any) => {
	const s3 = new S3();
	const param: any = {
		Bucket: AWS_BUCKET_NAME,
		Key: `${Math.floor(
			Math.random() * Math.floor(Math.random() * Date.now())
		)}-${file.originalname}`,
		Body: file.buffer,
	};

	await s3.upload(param).promise();
	return param.Key;
};
