import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/games/gamesReducer";
import detailsReducer from "../features/details/detailsReducer";

export const store = configureStore({
	reducer: {
		games: gamesReducer,
		details: detailsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
