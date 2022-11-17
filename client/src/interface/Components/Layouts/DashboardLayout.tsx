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
			{/* {This  dashboardlayout is the layout containing the nav and how all other components should display} */}
			{errorMessage && (
				<div className="absolute right-5 bottom-5 px-6 bg-[red] py-2 rounded-md shadow-md text-white">
					<p>{errorMessage}</p>
				</div>
			)}
			<div className="w-11/12 mx-auto overflow-auto h-screen">
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
