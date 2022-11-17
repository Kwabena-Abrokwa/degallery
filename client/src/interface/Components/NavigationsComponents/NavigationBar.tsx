import React from "react";
import { MdAdd } from "react-icons/md";
import profile from "../../Assets/LandingPageImages/profile.png";
import CustomButton from "../Customs/CustomButton";

interface NavigationBarProps {
	buttonTitle?: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
	buttonTitle,
	handleClick,
}) => {
	return (
		<nav className="w-full lg:flex justify-between items-center py-6">
			{/* {This is the navigation component} */}
			<div className="lg:w-1/2" />

			<div className="lg:flex lg:w-1/2">
				<div className="flex justify-between items-center">
					<div className="w-1/4">
						<img
							src={profile}
							alt={"Profile"}
							className={"w-12 h-12 lg:mx-6"}
						/>
					</div>
					<div className="w-3/4">
						<h3>Welcome, create new memories</h3>
					</div>
				</div>
				<div>
					{buttonTitle && (
						<CustomButton handleClick={handleClick}>
							<>
								<MdAdd style={{ marginRight: 5 }} size={24} />{" "}
								{buttonTitle}
							</>
						</CustomButton>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
