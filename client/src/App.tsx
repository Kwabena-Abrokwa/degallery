import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPages from "./interface/Pages/Guests/LandingPages";
import Home from "./interface/Pages/Dashboard/Home";

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
	return (
		<>
			(
			<Routes>
				<Route path="/" element={<LandingPages />} />
				<Route path="/dashboard" element={<Home />} />
			</Routes>
			)
		</>
	);
};

export default App;
