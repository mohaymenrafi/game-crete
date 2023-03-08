import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CardInfo } from "../types/gameInfo";

// interface IProps {
// 	name: string;
// 	id: number;
// 	img: string;
// 	released: string;
// }

const Game: FC<CardInfo> = ({ name, id, img, released }) => {
	// console.log(item);
	return (
		<StyledGame>
			<h3>{name}</h3>
			<p>{released}</p>
			<img src={img} alt="background" />
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
