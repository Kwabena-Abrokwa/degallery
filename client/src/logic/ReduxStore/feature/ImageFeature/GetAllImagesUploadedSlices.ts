import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ReactNode } from "react";

type ImageDetails = {
	imageName: string;
	imageDate: ReactNode;
	imageContent: string;
	imageId: number;
	image: string;
};

type InitialState = {
	loading: boolean;
	ImageData: ImageDetails[];
	error: string;
};

const initialState: InitialState = {
	loading: false,
	ImageData: [],
	error: "",
};

export const fetchAllImagesMethod = createAsyncThunk(
	"getAllImage/fetchAllImagesMethod",
	async () => {
		return await axios.get("getAllImages").then(({ data }) => {
			return data;
		});
	}
);

const GetAllImagesSlice = createSlice({
	name: "getAllImage",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchAllImagesMethod.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchAllImagesMethod.fulfilled, (state, action) => {
			state.loading = false;
			state.ImageData = action.payload;
		});
		builder.addCase(fetchAllImagesMethod.rejected, (state, action) => {
			state.loading = false;
			state.error =
				action.error.message || "Something happened whiles uploading image";
		});
	},
});

export default GetAllImagesSlice.reducer;
