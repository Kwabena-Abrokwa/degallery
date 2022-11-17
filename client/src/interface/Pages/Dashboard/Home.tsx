import React, { useEffect, useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import {
	toggleDisplayUploadModal,
	toggleShowControl,
	toggleShowImageDetails,
} from "../../../logic/ReduxStore/feature/GlobalStates/GlobalStateSlice";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import DisplayUploadModalComponent from "../../Components/PagesComponents/DisplayUploadModalComponent";
import DisplayImageDetails from "../../Components/PagesComponents/DisplayImageDetails";
import ImageCardsComponents from "../../Components/PagesComponents/ImageCardsComponents";
import { Link } from "react-router-dom";
import { fetchAllImagesMethod } from "../../../logic/ReduxStore/feature/ImageFeature/GetAllImagesUploadedSlices";
import { API_URLS } from "../../../logic/API/axiosConfig";
import CropImage from "../../Components/CropImageComponent/CropImage";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
	const [id, setId] = useState(0);

	const getAllImages = useAppSelector((state) => state.getAllImages);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllImagesMethod());
	}, []);

	return (
		<DashboardLayout
			buttonTitle="Upload new photo"
			handleClick={() => {
				dispatch(toggleDisplayUploadModal(true));
			}}
		>
			{/* {This  dashboardlayout is the layout containing the nav and how all other components should display} */}
			<>
				{/* {This component displays the uplaod modal for users to upload images} */}
				<DisplayUploadModalComponent />

				{/* {This component displays the selected images by the users} */}
				<DisplayImageDetails />

				{/* {This component displays the uplaod modal for users to crop, rotate and zoom in on images} */}
				<CropImage />

				{/* {This component is the gallery card component} */}
				<section className="pb-20">
					<Link to={"/"}>
						<h3 className="text-5xl py-10">De Gallery</h3>
					</Link>
					<div className="w-full">
						{getAllImages.loading ? (
							<div className="w-11/12 mx-auto">
								{" "}
								<p className="text-center text-3xl mt-20">
									Loading... please wait
								</p>{" "}
							</div>
						) : getAllImages.ImageData.length < 1 ? (
							<div className="w-full">
								<h2 className="text-6xl text-center">
									No photos uploaded
								</h2>
							</div>
						) : (
							<div className="lg:grid lg:grid-cols-3 lg:gap-4">
								{getAllImages.ImageData &&
									getAllImages.ImageData.map((item, n) => (
										<>
											<ImageCardsComponents
												image={`${API_URLS.image_URL}/${item.image}`}
												key={item.imageId}
												imageId={item.imageId}
												imageName={item.imageName}
												handleShowImageControl={() => {
													dispatch(toggleShowControl(true));
													setId(item.imageId);
												}}
												handleHideImageControl={() => {
													dispatch(toggleShowControl(false));
													setId(item.imageId);
												}}
												handleShowImageDetails={() => {
													dispatch(toggleShowImageDetails(item));
													setId(item.imageId);
												}}
												currentImageIndex={id}
											/>
										</>
									))}
							</div>
						)}
					</div>
				</section>
			</>
		</DashboardLayout>
	);
};

export default Home;
