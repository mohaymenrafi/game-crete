import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// interface

const initialState = {
	games: [],
};

export const gamesSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
});

// export const selectGames =

export default gamesSlice.reducer;
