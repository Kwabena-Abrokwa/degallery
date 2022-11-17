import { configureStore } from "@reduxjs/toolkit";
import GlobalStateSlice from "../feature/GlobalStateSlice";

const store = configureStore({
	reducer: { getGlobalStates: GlobalStateSlice,  },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
