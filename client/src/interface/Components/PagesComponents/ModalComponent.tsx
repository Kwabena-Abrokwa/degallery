import React from "react";
import { motion } from "framer-motion";

interface ModalComponentProps {
	children: JSX.Element;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ children }) => {
	const variants = {
		open: { opacity: 1, scale: 1 },
		closed: { opacity: 0, scale: 0 },
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4 }}
			className={"bg-[#000000bc] absolute top-0 left-0 h-screen w-screen z-10"}
			variants={variants}
		>
			{children}
		</motion.div>
	);
};

export default ModalComponent;
