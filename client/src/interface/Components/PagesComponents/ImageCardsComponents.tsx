import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdDelete, MdEdit } from "react-icons/md";
import {
	useAppDispatch,
	useAppSelector,
} from "../../../logic/ReduxStore/app/hooks";

interface ImageCardsComponentsProps {
	handleShowImageControl: React.MouseEventHandler<HTMLDivElement> | undefined;
	handleHideImageControl: React.MouseEventHandler<HTMLDivElement> | undefined;
	handleShowImageDetails: React.MouseEventHandler<HTMLDivElement> | undefined;
	image: string | undefined;
	imageId: number;
	imageName: string;
	currentImageIndex: number;
}

const ImageCardsComponents: React.FC<ImageCardsComponentsProps> = ({
	handleShowImageControl,
	handleHideImageControl,
	handleShowImageDetails,
	imageId,
	image,
	imageName,
	currentImageIndex,
}) => {
	const globalStates = useAppSelector((state) => state.getGlobalStates);

	return (
		<div
			className="w-full h-80 hover:shadow-md border cursor-pointer relative"
			onMouseOver={handleShowImageControl}
			onClick={handleShowImageDetails}
		>
			<img
				src={`${image}?timestamp=${new Date()}`}
				className={"w-full h-80"}
				crossOrigin={"anonymous"}
			/>
			{globalStates.showImageControls && currentImageIndex === imageId ? (
				<div onMouseOut={handleHideImageControl}>
					<div>
						<div
							className="absolute top-2 right-2 w-8 h-8 bg-white shadow-sm rounded-full flex flex-col items-center justify-center"
							onClick={handleShowImageControl}
						>
							<MdDelete size={24} />
						</div>
					</div>
					<motion.div className="absolute bottom-0 shadow-sm w-full bg-gradient-to-t from-black h-28 flex flex-row items-center">
						<div>
							<h3 className="text-white text-3xl text-center">
								{imageName}
							</h3>
						</div>
					</motion.div>
				</div>
			) : null}
		</div>
	);
};

export default ImageCardsComponents;
