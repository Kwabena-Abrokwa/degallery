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
import Gallery3 from "../../Assets/LandingPageImages/best-friends-g203e70ced_1280.jpg";
import DisplayUploadModalComponent from "../../Components/PagesComponents/DisplayUploadModalComponent";
import DisplayImageDetails from "../../Components/PagesComponents/DisplayImageDetails";
import ImageCardsComponents from "../../Components/PagesComponents/ImageCardsComponents";
import { Link } from "react-router-dom";
import { fetchAllImagesMethod } from "../../../logic/ReduxStore/feature/ImageFeature/GetAllImagesUploadedSlices";

interface HomeProps {}
const imageData = [
	{
		imageId: 1,
		imageName: "First Image",
	},
	{
		imageId: 2,
		imageName: "Second Image",
	},
	{
		imageId: 3,
		imageName: "Second Image",
	},
];

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
			<>
				<DisplayUploadModalComponent />

				<DisplayImageDetails />

				<section className="pb-20">
					<Link to={"/"}>
						<h3 className="text-5xl py-10">De Gallery</h3>
					</Link>
					<div className="lg:grid lg:grid-cols-3 lg:gap-4">
						{getAllImages.loading ? (
							<div>loading</div>
						) : imageData.length < 1 ? (
							<div>
								<h2>No photos uploaded</h2>
							</div>
						) : (
							imageData &&
							imageData.map((item, n) => (
								<>
									<ImageCardsComponents
										image={Gallery3}
										key={n}
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
							))
						)}
					</div>
				</section>
			</>
		</DashboardLayout>
	);
};

export default Home;
