import React from "react";

interface CustomButtonProps {
	children?: string | JSX.Element;
	handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	handleClick,
}) => {
	return (
		<button
			onClick={handleClick}
			className="bg-primary lg:px-8 text-white lg:py-3 rounded-md shadow flex items-center"
		>
			{children}
		</button>
	);
};

export default CustomButton;
