import React from "react";
import NavigationBar from "../NavigationsComponents/NavigationBar";

interface DashboardLayoutProps {
	children: JSX.Element;
	buttonTitle?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	errorMessage?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
	children,
	buttonTitle,
	handleClick,
	errorMessage,
}) => {
	return (
		<main className="bg-[#F3F4FB] flex justify-center items-start relative">
			{errorMessage && (
				<div className="absolute right-5 bottom-5 px-6 bg-[red] py-2 rounded-md shadow-md text-white">
					<p>{errorMessage}</p>
				</div>
			)}
			<div className="w-full px-10 overflow-auto h-screen">
				<NavigationBar
					buttonTitle={buttonTitle}
					handleClick={handleClick}
				/>
				{children}
			</div>
		</main>
	);
};

export default DashboardLayout;
