import React, { useCallback, useState } from "react";
import ModalComponent from "../PagesComponents/ModalComponent";
import Cropper from "react-easy-crop";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import getCroppedImg from "./functions/CropImageMethods";
import { API_URLS } from "../../../logic/API/axiosConfig";
import { toggleDisplayCrop } from "../../../logic/ReduxStore/feature/GlobalStates/GlobalStateSlice";
import { updateImageMethod } from "../../../logic/ReduxStore/feature/ImageFeature/UploadNewImageSlice";
import CustomButtonSpinner from "../Customs/CustomButtonSpinner";
import { fetchAllImagesMethod } from "../../../logic/ReduxStore/feature/ImageFeature/GetAllImagesUploadedSlices";

interface CropImageProps {}

const CropImage: React.FC<CropImageProps> = ({}) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const uploadImageState = useAppSelector((state) => state.uploadImage);

	const dispatch = useAppDispatch();

	const globalStates = useAppSelector((state) => state.getGlobalStates);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const cropImage = async () => {
		const { file, url } = await getCroppedImg(
			`${API_URLS.image_URL}/${globalStates.showImageDetails.image}`,
			croppedAreaPixels,
			rotation
		);

		if (file) {
			dispatch(
				updateImageMethod({
					image: file,
					imageContent: globalStates.showImageDetails.imageContent,
					imageName: globalStates.showImageDetails.imageName,
					imageId: globalStates.showImageDetails.imageId,
				})
			).then(() => {
				dispatch(fetchAllImagesMethod());
				dispatch(toggleDisplayCrop(false));
			});
		}
	};

	return globalStates.displayCrop ? (
		<ModalComponent>
			<>
				<div className="w-5/6 bg-white h-4/6 my-20 relative">
					<Cropper
						image={`${API_URLS.image_URL}/${globalStates.showImageDetails.image}`}
						crop={crop}
						zoom={zoom}
						rotation={rotation}
						aspect={1}
						onCropChange={setCrop}
						onCropComplete={onCropComplete}
						onZoomChange={setZoom}
					/>
				</div>
				<div className="flex w-5/6 mx-auto justify-between items-center">
					<div className="flex w-[55%] justify-between">
						<button
							className="w-[24%] shadow-md h-[50px] my-10 bg-secondary text-white"
							onClick={() => {
								setRotation(rotation + 1);
							}}
						>
							Rotate left
						</button>
						<button
							className="w-[20%] shadow-md h-[50px] my-10 bg-secondary text-white"
							onClick={() => {
								setRotation(0);
								setZoom(1);
							}}
						>
							Reset
						</button>
						<button
							className="w-[20%] shadow-md h-[50px] my-10 bg-secondary text-white"
							onClick={() => {
								setRotation(rotation - 1);
							}}
						>
							Rotate right
						</button>
						<button
							className="w-[20%] shadow-md h-[50px] my-10 bg-primary text-white"
							onClick={() => {
								if (zoom === 0.9) {
									return null;
								} else {
									setZoom(zoom - 0.1);
								}
							}}
						>
							Zoom out
						</button>
						<button
							className="w-[20%] shadow-md h-[50px] my-10 bg-primary text-white"
							onClick={() => {
								setZoom(zoom + 0.1);
							}}
						>
							Zoom in
						</button>
					</div>
					<button
						className="w-[20%] shadow-md h-[50px] my-10 bg-black text-white "
						onClick={() => {
							dispatch(toggleDisplayCrop(false));
						}}
					>
						Cancel
					</button>
					<button
						className="w-[20%] shadow-md h-[50px] my-10 bg-white"
						onClick={cropImage}
					>
						{uploadImageState.loading ? (
							<CustomButtonSpinner />
						) : (
							"Save now"
						)}
					</button>
				</div>
			</>
		</ModalComponent>
	) : null;
};

export default CropImage;
