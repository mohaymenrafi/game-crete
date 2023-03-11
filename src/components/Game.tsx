import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CardInfo } from "../types/gameInfo";
import { useAppDispatch } from "../app/hooks";
import {
	getGameDetails,
	getGameScreenshots,
} from "../features/details/detailsReducer";
import { Link } from "react-router-dom";

// interface IProps {
// 	name: string;
// 	id: number;
// 	img: string;
// 	released: string;
// }

const Game: FC<CardInfo> = ({ name, id, img, released }) => {
	// console.log(item);
	const dispatch = useAppDispatch();
	const handleLoadDetails = async (id: number) => {
		await dispatch(getGameDetails(id));
		await dispatch(getGameScreenshots(id));
		document.body.style.overflow = "hidden";
	};
	return (
		<StyledGame onClick={() => handleLoadDetails(id)}>
			<Link to={`/game/${id}`}>
				<h3>{name}</h3>
				<p>{released}</p>
				<img src={img} alt="background" />
			</Link>
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
