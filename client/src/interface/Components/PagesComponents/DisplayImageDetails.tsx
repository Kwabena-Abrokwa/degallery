import React, { useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import { toggleShowImageDetails } from "../../../logic/ReduxStore/feature/GlobalStates/GlobalStateSlice";
import Gallery2 from "../../Assets/LandingPageImages/children-g688789163_1280.jpg";
import ModalComponent from "../../Components/PagesComponents/ModalComponent";
import { MdClose } from "react-icons/md";

interface DisplayImageDetailsProps {}

const DisplayImageDetails: React.FC<DisplayImageDetailsProps> = ({}) => {
	const globalStates = useAppSelector((state) => state.getGlobalStates);

	const dispatch = useAppDispatch();

	return (
		<>
			{globalStates.showImageDetails && (
				<ModalComponent>
					<div className="w-[60%] py-10 mx-auto my-4 bg-white overflow-y-scroll relative rounded-md">
						<div
							className={
								"absolute right-2 top-2 cursor-pointer bg-white rounded-full"
							}
							onClick={() => {
								dispatch(toggleShowImageDetails(false));
							}}
						>
							<MdClose size={32} />
						</div>
						<img src={Gallery2} className="w-full" />
						<div className="w-11/12 mx-auto max-h-[100px]">
							<div className="flex justify-between items-center py-5">
								<h3 className="text-3xl">
									Name: {globalStates.showImageDetails.imageName}
								</h3>
								<h3 className="text-3xl">28th October, 2022</h3>
							</div>
							<p className="text-xl">Today I had fun with Mariam</p>
						</div>
					</div>
				</ModalComponent>
			)}
		</>
	);
};

export default DisplayImageDetails;
