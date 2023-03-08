import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Game from "../components/Game";
import {
	getNewGames,
	getPopoularProducts,
	getUpcomingGames,
	selectGames,
} from "../features/games/gamesReducer";

export default function Home() {
	const dispatch = useAppDispatch();
	const { popularGames, newGames, upcoming } = useAppSelector(selectGames);

	useEffect(() => {
		const loadPopularGames = async () => {
			await dispatch(getPopoularProducts());
		};
		const loadNewGames = async () => {
			await dispatch(getNewGames());
		};
		const loadUpcomingGames = async () => {
			await dispatch(getUpcomingGames());
		};

		loadPopularGames();
		loadNewGames();
		loadUpcomingGames();
	}, [dispatch]);
	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map((item) => (
					<Game
						key={item.id}
						name={item.name}
						id={item.id}
						released={item.released}
						img={item.img}
					/>
				))}
			</Games>
			<h2>Popular Games</h2>
			<Games>
				{popularGames.map((item) => (
					<Game
						key={item.id}
						name={item.name}
						id={item.id}
						released={item.released}
						img={item.img}
					/>
				))}
			</Games>
			<h2>New Games</h2>
			<Games>
				{newGames.map((item) => (
					<Game
						key={item.id}
						name={item.name}
						id={item.id}
						released={item.released}
						img={item.img}
					/>
				))}
			</Games>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;
