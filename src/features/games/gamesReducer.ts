import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";
import { popularGamesURL } from "../../api/api";

interface initState {
	popularGames: [];
}

const initialState: initState = {
	popularGames: [],
};

export const getPopoularProducts = createAsyncThunk(
	"/popularProducts",
	async (_, { rejectWithValue }) => {
		// const url = getPopoularProducts
		try {
			const response = await axios.get(popularGamesURL());
			return response.data;
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);

export const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getPopoularProducts.fulfilled, (state, action) => {
			state.popularGames = action.payload;
		});
	},
});

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
