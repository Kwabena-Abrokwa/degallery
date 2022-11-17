import React from "react";
import { motion } from "framer-motion";
import Gallery1 from "../../Assets/LandingPageImages/family-g73e47d82d_1280.jpg";
import Gallery2 from "../../Assets/LandingPageImages/best-friends-g203e70ced_1280.jpg";
import Gallery3 from "../../Assets/LandingPageImages/children-g688789163_1280.jpg";
import Gallery4 from "../../Assets/LandingPageImages/mother-and-daughter-g6732029c7_1280.jpg";
import Gallery5 from "../../Assets/LandingPageImages/photographer-g253420e6c_1280.jpg";
import { Link } from "react-router-dom";

interface LandingPagesProps {}

const LandingPages: React.FC<LandingPagesProps> = ({}) => {
	return (
		<main className="w-full  relative">
			<header></header>
			<section className="h-screen bg-white  flex justify-between items-center">
				<motion.div
					initial={{ translateX: -800 }}
					animate={{ translateX: 20 }}
					transition={{ bounce: 10, duration: 1, delay: 0.8 }}
					className="w-1/4"
				>
					<div className="w-5/6">
						<h1 className={"text-6xl w-full text-black mb-12"}>
							Welcome to degallery
						</h1>
						<a
							href="#next1"
							className="mx-auto bg-primary px-8 py-3 rounded-sm text-white"
						>
							Get started
						</a>
					</div>
				</motion.div>
				<div className="w-3/4">
					<motion.div
						initial={{ translateX: 1000 }}
						animate={{ translateX: 0 }}
						transition={{ bounce: 10, duration: 1.5 }}
						className="ab"
					>
						<img src={Gallery2} className={"w-full h-screen"} />
					</motion.div>
				</div>
			</section>
			<section className="h-screen bg-white  flex justify-between items-start my-10">
				<div className="w-1/3 " id="next1">
					<div>
						<img src={Gallery4} className={"w-full h-1/3 "} />
						<div className="my-10" />
						<img src={Gallery3} className={"w-full h-1/3"} />
						<div className="my-10" />
						<img src={Gallery1} className={"w-full"} />
					</div>
				</div>
				<div className="w-3/4">
					<div className="w-5/6">
						<img src={Gallery5} className={"w-full h-1/3"} />
						<div className="justify-center mt-10">
							<h1 className={"text-3xl w-full text-black mb-12"}>
								Create, upload and keep memories from loved ones
							</h1>
							<Link to={"/dashboard"}>
								<a
									href="#next1"
									className="bg-primary px-8 py-3 rounded-sm text-white"
								>
									Go to dashboard
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default LandingPages;
