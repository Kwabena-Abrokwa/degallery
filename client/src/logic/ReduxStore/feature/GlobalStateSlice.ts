import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	windowLoader: boolean;
	displayModal: boolean;
	showImageDetails: boolean;
};

const initialState: InitialState = {
	windowLoader: true,
	displayModal: false,
	showImageDetails: false,
};

const GlobalStateSlice = createSlice({
	name: "globalStates",
	initialState,
	reducers: {
		toggleWindowLoader: (state, action) => {
			state.windowLoader = action.payload;
		},
		toggleDisplayModal: (state, action) => {
			state.displayModal = action.payload;
		},
		toggleShowImageDetails: (state, action) => {
			state.showImageDetails = action.payload;
		},
	},
});

export const {
	toggleWindowLoader,
	toggleDisplayModal,
	toggleShowImageDetails,
} = GlobalStateSlice.actions;
export default GlobalStateSlice.reducer;
