import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

type ImageDetails = {
	imageName: string;
	imageDate: ReactNode;
	imageContent: string;
	imageId: number;
};

type InitialState = {
	windowLoader: boolean;
	displayUploadModal: boolean;
	showImageDetails: ImageDetails;
	showImageControls: false;
};

const initialState: InitialState = {
	windowLoader: true,
	displayUploadModal: false,
	showImageDetails: {
		imageName: "",
		imageDate: "",
		imageContent: "",
		imageId: 0,
	},
	showImageControls: false,
};

const GlobalStateSlice = createSlice({
	name: "globalStates",
	initialState,
	reducers: {
		toggleWindowLoader: (state, action) => {
			state.windowLoader = action.payload;
		},
		toggleDisplayUploadModal: (state, action) => {
			state.displayUploadModal = action.payload;
		},
		toggleShowImageDetails: (state, action) => {
			state.showImageDetails = action.payload;
		},
		toggleShowControl: (state, action) => {
			state.showImageControls = action.payload;
		},
	},
});

export const {
	toggleWindowLoader,
	toggleDisplayUploadModal,
	toggleShowImageDetails,
	toggleShowControl,
} = GlobalStateSlice.actions;
export default GlobalStateSlice.reducer;
