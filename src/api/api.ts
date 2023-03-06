import { getDay, getMonth, getYear } from "../utils/getTime";

const currDay = getDay();
const currMonth = getMonth();
const currYear = getYear();

//Base URL
export const base_url = "https://api.rawg.io/api/";

const currentDate = `${currYear}-${currMonth}-${currDay}`;
const lastYear = `${currYear - 1}-${currMonth}-${currDay}`;
const nextYear = `${currYear + 1}-${currMonth}-${currDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${process.env.RAWG_API_KEY}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${process.env.RAWG_API_KEY}`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${process.env.RAWG_API_KEY}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS

export const gameDetailsURL = (game_id: number) =>
	`${base_url}games/${game_id}?key=${process.env.RAWG_API_KEY}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id: number) =>
	`${base_url}games/${game_id}/screenshots?key=${process.env.RAWG_API_KEY}`;
//Searched game
export const searchGameURL = (game_name: string) =>
	`${base_url}games?search=${game_name}&page_size=9&key=${process.env.RAWG_API_KEY}`;
