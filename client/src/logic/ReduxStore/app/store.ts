import { configureStore } from "@reduxjs/toolkit";
import GlobalStateSlice from "../feature/GlobalStates/GlobalStateSlice";
import GetAllImagesUploadedSlices from "../feature/ImageFeature/GetAllImagesUploadedSlices";
import UploadNewImageSlice from "../feature/ImageFeature/UploadNewImageSlice";

const store = configureStore({
	reducer: {
		getGlobalStates: GlobalStateSlice,
		getAllImages: GetAllImagesUploadedSlices,
		uploadImage: UploadNewImageSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
