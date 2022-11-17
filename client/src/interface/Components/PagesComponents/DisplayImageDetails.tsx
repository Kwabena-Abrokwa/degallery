import React, { useCallback, useState } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";
import {
	toggleDisplayCrop,
	toggleShowImageDetails,
} from "../../../logic/ReduxStore/feature/GlobalStates/GlobalStateSlice";
import ModalComponent from "../../Components/PagesComponents/ModalComponent";
import { MdClose, MdCrop } from "react-icons/md";
import { API_URLS } from "../../../logic/API/axiosConfig";

interface DisplayImageDetailsProps {}

const DisplayImageDetails: React.FC<DisplayImageDetailsProps> = ({}) => {
	const globalStates = useAppSelector((state) => state.getGlobalStates);

	const dispatch = useAppDispatch();

	return (
		<>
			{globalStates.showImageDetails.image && (
				<ModalComponent>
					<div className="w-[60%] pb-10 mx-auto my-4 bg-white overflow-y-scroll relative rounded-md">
						<div
							className={
								"absolute right-14 top-2 shadow-md cursor-pointer p-1 bg-white rounded-full"
							}
							onClick={() => {
								dispatch(toggleDisplayCrop(true));
							}}
						>
							<MdCrop size={28} />
						</div>
						<div
							className={
								"absolute right-2 top-2 shadow-md cursor-pointer p-1 bg-white rounded-full"
							}
							onClick={() => {
								dispatch(toggleShowImageDetails(false));
							}}
						>
							<MdClose size={28} />
						</div>
						<img
							src={`${API_URLS.image_URL}/${
								globalStates.showImageDetails.image
							}?timestamp=${new Date()}`}
							className="w-full"
							crossOrigin={"anonymous"}
						/>
						<div className="w-11/12 mx-auto max-h-[100px]">
							<div className="flex justify-between items-center py-5">
								<h3 className="text-3xl">
									Name: {globalStates.showImageDetails.imageName}
								</h3>
								<h3 className="text-3xl">
									{globalStates.showImageDetails.createdAt}
								</h3>
							</div>
							<p className="text-xl">
								{globalStates.showImageDetails.imageContent}
							</p>
						</div>
					</div>
				</ModalComponent>
			)}
		</>
	);
};

export default DisplayImageDetails;
