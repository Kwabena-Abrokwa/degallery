import React, { useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import { toggleDisplayUploadModal } from "../../../logic/ReduxStore/feature/GlobalStates/GlobalStateSlice";
import ModalComponent from "../../Components/PagesComponents/ModalComponent";
import { MdClose } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
import CustomInput from "../Customs/CustomInput";
import { uploadNewImageMethod } from "../../../logic/ReduxStore/feature/ImageFeature/UploadNewImageSlice";
import CustomButtonSpinner from "../Customs/CustomButtonSpinner";
import { fetchAllImagesMethod } from "../../../logic/ReduxStore/feature/ImageFeature/GetAllImagesUploadedSlices";

interface DisplayUploadModalComponentProps {}

type ImageDetails = {
	imageName: string;
	imageContent: string;
	image: string;
};

const DisplayUploadModalComponent: React.FC<
	DisplayUploadModalComponentProps
> = ({}) => {
	const [imageData, setImageData] = useState<ImageDetails>({
		imageName: "",
		image: "",
		imageContent: "",
	});
	const [images, setimages] = useState("");
	const globalStates = useAppSelector((state) => state.getGlobalStates);
	const uploadImageState = useAppSelector((state) => state.uploadImage);

	const dispatch = useAppDispatch();

	const handleImage = (
		event: React.ChangeEventHandler<HTMLInputElement> | any
	) => {
		setImageData({
			...imageData,
			image: event.target.files[0],
		});
		const imageFile = URL.createObjectURL(event.target.files[0]);
		setimages(imageFile);
	};

	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEventHandler<HTMLTextAreaElement>
			| any
	) => {
		setImageData({
			...imageData,
			[event.target.name]: event.target.value,
		});

		console.log("====================================");
		console.log(imageData);
		console.log("====================================");
	};

	const handleImageUpload = () => {
		dispatch(uploadNewImageMethod(imageData)).then(async () => {
			dispatch(fetchAllImagesMethod());
			dispatch(toggleDisplayUploadModal(false));
		});
	};

	return (
		<>
			{globalStates.displayUploadModal ? (
				<ModalComponent>
				{/* {This component displays the uplaod modal for users to upload images} */}
					<div className="w-11/12 lg:w-[35%] mx-auto my-10 bg-white overflow-y-scroll relative rounded-md">
						<div
							className={"absolute right-2 top-2 cursor-pointer"}
							onClick={() => {
								dispatch(toggleDisplayUploadModal(false));
							}}
						>
							<MdClose size={32} />
						</div>
						<form className="w-5/6 mx-auto h-[600px] pt-6">
							<h3 className="text-2xl font-semibold py-4">
								Create a new gallery
							</h3>
							<div className="w-full py-6">
								<label>Image Name</label>
								<CustomInput
									handleInputChange={handleChange}
									inputValue={imageData.imageName}
									inputName={"imageName"}
									inputType={"text"}
								/>
							</div>

							<div className="w-full py-6">
								<label>Share event memories</label>
								<textarea
									className="w-full shadow-md border p-3 mt-1"
									rows={10}
									cols={10}
									name={"imageContent"}
									value={imageData.imageContent}
									onChange={handleChange}
								/>
							</div>
							<div className="w-full relative rounded-md border-gray-400 h-52 cursor-pointer bg-[#F6F6F6] mt-2">
								{images.length < 1 ? (
									<div className="py-6 absolute left-[30%] lg:left-[35%] cursor-pointer z-2">
										<div>
											<h3 className="text-center my-2">
												Upload image
											</h3>
											<div className="w-1/6 mx-auto">
												<FaUpload size={25} />
											</div>
										</div>
									</div>
								) : null}
								{images && (
									<div className="">
										{" "}
										<img
											src={images}
											alt="Images"
											className="w-full h-52"
										/>{" "}
									</div>
								)}

								<input
									type={"file"}
									className="absolute top-0 left-0 opacity-0 w-full h-full z-50 cursor-pointer"
									onChange={handleImage}
									name={"img"}
									accept="image/*"
								/>
							</div>
							{uploadImageState.message && (
								<h4>{uploadImageState.message}</h4>
							)}
							<button
								className="w-full shadow-md border h-[50px] my-10 bg-secondary text-white"
								disabled={uploadImageState.loading}
								onClick={handleImageUpload}
							>
								{uploadImageState.loading ? (
									<CustomButtonSpinner />
								) : (
									"Upload photo"
								)}
							</button>
						</form>
					</div>
				</ModalComponent>
			) : null}
		</>
	);
};

export default DisplayUploadModalComponent;
