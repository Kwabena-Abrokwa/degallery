import React from "react";
import { MdSearch, MdAdd, MdNotificationsNone } from "react-icons/md";
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
		<nav className="w-full flex justify-between items-center py-6">
			<div className="w-1/2" />

			<div className="flex w-1/2">
				<div className="flex justify-between items-center">
					<img
						src={profile}
						alt={"Profile"}
						className={"w-12 h-12 mx-6"}
					/>
					<h3>Welcome, create new memories</h3>
				</div>
				{buttonTitle && (
					<CustomButton handleClick={handleClick}>
						<>
							<MdAdd style={{ marginRight: 5 }} size={24} />{" "}
							{buttonTitle}
						</>
					</CustomButton>
				)}
			</div>
		</nav>
	);
};

export default NavigationBar;
