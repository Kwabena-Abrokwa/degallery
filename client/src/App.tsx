import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPages from "./interface/Pages/Guests/LandingPages";
import { useAppDispatch, useAppSelector } from "./logic/ReduxStore/app/hooks";
import { toggleWindowLoader } from "./logic/ReduxStore/feature/GlobalStateSlice";
import Home from "./interface/Pages/Dashboard/Home";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
	const dispatch = useAppDispatch();
	const windowLoader = useAppSelector(
		(state) => state.getGlobalStates.windowLoader
	);

	const loader = () => {
		dispatch(toggleWindowLoader(false));
	};

	window.onload = loader;

	return (
		<>
			{windowLoader ? (
				<></>
			) : (
				<Routes>
					<Route path="/" element={<LandingPages />} />
					<Route path="/dashboard" element={<Home />} />
				</Routes>
			)}
		</>
	);
};

export default App;
