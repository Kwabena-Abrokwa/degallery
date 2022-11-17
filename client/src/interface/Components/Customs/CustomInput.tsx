import React from "react";

interface CustomInputProps {
	inputName: string | undefined;
	inputType: React.HTMLInputTypeAttribute | undefined;
	inputValue: string | number | readonly string[] | undefined;
	handleInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	styles?: React.CSSProperties | undefined;
}
{
	/* {A reuseable input component} */
}

const CustomInput: React.FC<CustomInputProps> = ({
	inputName,
	inputType,
	inputValue,
	handleInputChange,
	styles,
}) => {
	return (
		<input
			type={inputType}
			value={inputValue}
			onChange={handleInputChange}
			name={inputName}
			className="w-full shadow-md border h-[50px] px-3 mt-1"
			style={styles}
		/>
	);
};

export default CustomInput;
