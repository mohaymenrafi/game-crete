import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import axios from "axios";
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGameURL,
} from "../../api/api";
import { CardInfo } from "../../types/gameInfo";

interface initState {
	popularGames: CardInfo[];
	newGames: CardInfo[];
	upcoming: CardInfo[];
	searchedGames: CardInfo[];
}

const initialState: initState = {
	popularGames: [],
	newGames: [],
	upcoming: [],
	searchedGames: [],
};

export const getPopoularProducts = createAsyncThunk(
	"/popularProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(popularGamesURL());
			const trimmedData = response.data.results.map((item: any) => {
				return {
					name: item.name,
					id: item.id,
					img: item.background_image,
					released: item.released,
				};
			});
			return trimmedData;
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);

export const getNewGames = createAsyncThunk(
	"/getNewGames",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(newGamesURL());
			const trimmedData = response.data.results.map((item: any) => {
				return {
					name: item.name,
					id: item.id,
					img: item.background_image,
					released: item.released,
				};
			});
			return trimmedData;
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);
export const getUpcomingGames = createAsyncThunk(
	"/getUpcomingGames",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(upcomingGamesURL());
			const trimmedData = response.data.results.map((item: any) => {
				return {
					name: item.name,
					id: item.id,
					img: item.background_image,
					released: item.released,
				};
			});
			// return response.data.results as CardInfo[];
			return trimmedData as CardInfo[];
		} catch (error: any) {
			if (!error.response) {
				throw error;
			}
			return rejectWithValue(error.response);
		}
	}
);

export const getSearchedGames = createAsyncThunk(
	"/getSearchedGames",
	async (term: string, { rejectWithValue }) => {
		try {
			const response = await axios.get(searchGameURL(term));
			const trimmedData = response.data.results.map((item: any) => {
				return {
					name: item.name,
					id: item.id,
					img: item.background_image,
					released: item.released,
				};
			});
			return trimmedData as CardInfo[];
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
	reducers: {
		clearSearch: (state) => {
			state.searchedGames = [];
		},
	},
	extraReducers(builder) {
		builder
			.addCase(
				getPopoularProducts.fulfilled,
				(state, action: PayloadAction<CardInfo[]>) => {
					state.popularGames = action.payload;
				}
			)
			.addCase(
				getNewGames.fulfilled,
				(state, action: PayloadAction<CardInfo[]>) => {
					state.newGames = action.payload;
				}
			)
			.addCase(
				getUpcomingGames.fulfilled,
				(state, action: PayloadAction<CardInfo[]>) => {
					state.upcoming = action.payload;
				}
			)
			.addCase(getSearchedGames.fulfilled, (state, action) => {
				state.searchedGames = action.payload;
			});
	},
});

export const selectGames = (state: RootState) => state.games;

export const { clearSearch } = gamesSlice.actions;

export default gamesSlice.reducer;
