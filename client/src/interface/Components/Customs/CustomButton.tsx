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
			className="bg-primary px-8 text-white py-3 rounded-md shadow flex items-center"
		>
			{children}
		</button>
	);
};

export default CustomButton;
