import React, { useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import {
	toggleDisplayModal,
	toggleShowImageDetails,
} from "../../../logic/ReduxStore/feature/GlobalStateSlice";
import Gallery1 from "../../Assets/LandingPageImages/family-g73e47d82d_1280.jpg";
import Gallery2 from "../../Assets/LandingPageImages/best-friends-g203e70ced_1280.jpg";
import Gallery3 from "../../Assets/LandingPageImages/children-g688789163_1280.jpg";
import DashboardLayout from "../../Components/Layouts/DashboardLayout";
import ModalComponent from "../../Components/PagesComponents/ModalComponent";
import { motion } from "framer-motion";
import { MdClose, MdEdit } from "react-icons/md";
import { FaUpload } from "react-icons/fa";

interface HomeProps {}

const imageData = [
	{
		id: 1,
		name: "First Image",
	},
	{
		id: 2,
		name: "Second Image",
	},
	{
		id: 3,
		name: "Second Image",
	},
];

const Home: React.FC<HomeProps> = ({}) => {
	const [id, setId] = useState(0);
	const [images, setimages] = useState("");
	const globalStates = useAppSelector((state) => state.getGlobalStates);

	const dispatch = useAppDispatch();

	return (
		<DashboardLayout
			buttonTitle="Upload new photo"
			handleClick={() => {
				dispatch(toggleDisplayModal(true));
			}}
		>
			<>
				{globalStates.displayModal ? (
					<ModalComponent>
						<div className="w-[35%] mx-auto my-10 bg-white overflow-y-scroll relative rounded-md">
							<div
								className={"absolute right-2 top-2 cursor-pointer"}
								onClick={() => {
									dispatch(toggleDisplayModal(false));
								}}
							>
								<MdClose size={32} />
							</div>
							<form className="w-5/6 mx-auto h-[600px] pt-6">
								<h3 className="text-2xl font-semibold py-4">
									Create a new gallery
								</h3>
								<div className="w-full py-6">
									<label>Gallery Name</label>
									<input
										type="text"
										className="w-full shadow-md border h-[50px] px-3 mt-1"
									/>
								</div>

								<div className="w-full py-6">
									<label>Share event memories</label>
									<textarea
										className="w-full shadow-md border p-3 mt-1"
										rows={10}
										cols={10}
									/>
								</div>
								<div className="w-full relative rounded-md border-gray-400 h-40 cursor-pointer bg-[#F6F6F6] mt-2">
									{images.length < 1 ? (
										<div className="py-6 absolute left-[25%] lg:left-[32%] cursor-pointer z-2">
											<div>
												<h3 className="text-center my-2">
													Upload store image
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
												className="w-full h-40"
											/>{" "}
										</div>
									)}

									<input
										type={"file"}
										className="absolute top-0 left-0 opacity-0 w-full h-full z-50 cursor-pointer"
										onChange={() => {}}
										name={"img"}
										accept="image/*"
									/>
								</div>
								<button className="w-full shadow-md border h-[50px] my-10 bg-secondary text-white">
									Upload photo
								</button>
							</form>
						</div>
					</ModalComponent>
				) : null}
				<section className="pb-20">
					<h3 className="text-3xl py-10">Gallery</h3>
					<div className="lg:grid lg:grid-cols-3 lg:gap-4">
						{imageData &&
							imageData.map((item) => (
								<div
									className="w-full h-80 hover:shadow-md border cursor-pointer relative"
									onMouseOver={() => {
										dispatch(toggleShowImageDetails(true));
										setId(item.id);
									}}
								>
									<img src={Gallery3} className={"w-full h-80"} />
									{globalStates.showImageDetails && id === item.id ? (
										<div
											onMouseOut={() => {
												dispatch(toggleShowImageDetails(false));
												setId(item.id);
											}}
										>
											<div
												className="absolute top-2 right-2 w-8 h-8 bg-white shadow-sm rounded-full flex flex-col items-center justify-center"
												onClick={() => {
													dispatch(toggleDisplayModal(true));
												}}
											>
												<MdEdit size={24} />
											</div>
											<motion.div className="absolute bottom-0 shadow-sm w-full bg-gradient-to-t from-black h-28 flex flex-row items-center">
												<div>
													<h3 className="text-white text-3xl text-center">
														{item.name}
													</h3>
												</div>
											</motion.div>
											<div className="w-full h-20 bg-secondary"></div>
										</div>
									) : null}
								</div>
							))}
					</div>
				</section>
			</>
		</DashboardLayout>
	);
};

export default Home;
