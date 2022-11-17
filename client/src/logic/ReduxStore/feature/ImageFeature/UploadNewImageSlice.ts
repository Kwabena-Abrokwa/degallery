import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ImageDetails = {
	imageName: string;
	imageContent: string;
	image: string;
	imageId?: number;
};

type InitialState = {
	loading: boolean;
	message: string;
	error: string;
};

const initialState: InitialState = {
	loading: false,
	message: "",
	error: "",
};

export const updateImageMethod = createAsyncThunk(
	"uploadNewImage/updateImageMethod",
	async (datas: ImageDetails) => {
		return await axios
			.put(
				`updateImage/${datas.imageId}`,
				{
					imageName: datas.imageName,
					image: datas.image,
					imageContent: datas.imageContent,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then(({ data }) => {
				return data;
			});
	}
);

export const uploadNewImageMethod = createAsyncThunk(
	"uploadNewImage/uploadNewImageMethod",
	async (datas: ImageDetails) => {
		return await axios
			.post("uploadNewImage", datas, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then(({ data }) => {
				return data;
			});
	}
);

const uploadNewImageSlice = createSlice({
	name: "uploadNewImage",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(uploadNewImageMethod.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(uploadNewImageMethod.fulfilled, (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
		});
		builder.addCase(uploadNewImageMethod.rejected, (state, action) => {
			state.loading = false;
			state.error =
				action.error.message || "Something happened whiles uploading image";
		});
		builder.addCase(updateImageMethod.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateImageMethod.fulfilled, (state, action) => {
			state.loading = false;
			state.message = action.payload.message;
		});
		builder.addCase(updateImageMethod.rejected, (state, action) => {
			state.loading = false;
			state.error =
				action.error.message || "Something happened whiles updating image";
		});
	},
});

export default uploadNewImageSlice.reducer;
