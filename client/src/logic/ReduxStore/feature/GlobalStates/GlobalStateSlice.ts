import { createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";

type ImageDetails = {
	imageName: string;
	createdAt: ReactNode;
	imageContent: string;
	imageId: number;
	image: string;
};

type InitialState = {
	windowLoader: boolean;
	displayUploadModal: boolean;
	showImageDetails: ImageDetails;
	showImageControls: boolean;
	displayCrop: boolean;
};

const initialState: InitialState = {
	windowLoader: true,
	displayUploadModal: false,
	showImageDetails: {
		imageName: "",
		createdAt: "",
		imageContent: "",
		imageId: 0,
		image: "",
	},
	showImageControls: false,
	displayCrop: false,
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
		toggleDisplayCrop: (state, action) => {
			state.displayCrop = action.payload;
		},
	},
});

export const {
	toggleWindowLoader,
	toggleDisplayUploadModal,
	toggleShowImageDetails,
	toggleShowControl,
	toggleDisplayCrop,
} = GlobalStateSlice.actions;
export default GlobalStateSlice.reducer;
