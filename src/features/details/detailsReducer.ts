import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// interface

const initialState = {
	details: [],
};

export const detailsSlice = createSlice({
	name: "details",
	initialState,
	reducers: {},
});

// export const selectGames =

export default detailsSlice.reducer;
