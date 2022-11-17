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
		<>
		{/* {A reuseable button component} */}
			<button
				onClick={handleClick}
				className="bg-primary px-8 text-white py-3 rounded-md shadow hidden lg:flex items-center"
			>
				{children}
			</button>

			<button
				onClick={handleClick}
				className="bg-primary w-full text-white py-3 rounded-md shadow flex lg:hidden px-[100px] mt-10"
			>
				{children}
			</button>
		</>
	);
};

export default CustomButton;
