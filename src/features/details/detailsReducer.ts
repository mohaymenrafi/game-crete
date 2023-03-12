import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../../api/api";
import { ScreenShotType, DetailsInfoType } from "../../types/gameInfo";

interface IinitState {
	details: DetailsInfoType;
	screenshots: ScreenShotType[];
	loading: boolean;
}

const initialState: IinitState = {
	details: null,
	screenshots: [],
	loading: true,
};

export const getGameDetails = createAsyncThunk(
	"/getGameDetails",
	async (id: number, { rejectWithValue }) => {
		try {
			const response = await axios.get(gameDetailsURL(id));
			return response.data as DetailsInfoType;
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);

export const getGameScreenshots = createAsyncThunk(
	"/getGameScreenshots",
	async (id: number, { rejectWithValue }) => {
		try {
			const response = await axios.get(gameScreenshotURL(id));
			return response.data.results as ScreenShotType[];
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);

export const detailsSlice = createSlice({
	name: "details",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getGameDetails.pending, (state) => {
				state.loading = true;
			})
			.addCase(getGameDetails.fulfilled, (state, action) => {
				state.details = action.payload;
				state.loading = true;
			})
			.addCase(getGameScreenshots.pending, (state) => {
				state.loading = true;
			})
			.addCase(getGameScreenshots.fulfilled, (state, action) => {
				state.screenshots = action.payload;
				state.loading = false;
			});
	},
});

export const selectDetails = (state: RootState) => state.details;

export default detailsSlice.reducer;
