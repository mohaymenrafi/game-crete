import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "../animation/animate";
import { useAppDispatch } from "../app/hooks";
import { clearSearch, getSearchedGames } from "../features/games/gamesReducer";
import logo from "../img/logo.svg";

const Nav = () => {
	const [searchInput, setSearchInput] = useState<string>("");
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(getSearchedGames(searchInput));
		setSearchInput("");
	};

	const handleLogoClick = () => {
		dispatch(clearSearch());
	};

	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={handleLogoClick}>
				<img src={logo} alt="game-crate" />
				<h1>Game Crate</h1>
			</Logo>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</StyledNav>
	);
};

const StyledNav = styled(motion.div)`
	padding: 3rem 1rem;
	@media (min-width: 760px) {
		padding: 3rem 5rem;
	}
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Nav;
