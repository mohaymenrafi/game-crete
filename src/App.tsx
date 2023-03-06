import { useEffect } from "react";
import { popularGamesURL } from "./api/api";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
	getPopoularProducts,
	selectGames,
} from "./features/games/gamesReducer";

function App() {
	const dispatch = useAppDispatch();
	const games = useAppSelector(selectGames);

	useEffect(() => {
		const loadProducts = async () => {
			console.log(popularGamesURL());
			await dispatch(getPopoularProducts());
		};
		loadProducts();
	}, []);
	useEffect(() => {
		console.log(games);
		console.log(process.env.RAWG_API_KEY);
		console.log(process.env.NEW);
	}, [games]);
	return (
		<div className="App">
			<h1>Hello Ignite</h1>
		</div>
	);
}

export default App;
