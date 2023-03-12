import { motion } from "framer-motion";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { selectDetails } from "../features/details/detailsReducer";
import { resizedImg } from "../utils/resizedImage";

//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

interface IProps {
	pathId: string;
}

const GameDetails: FC<IProps> = ({ pathId }) => {
	const { details, screenshots, loading } = useAppSelector(selectDetails);
	const nagivate = useNavigate();

	const handleExitDetails = (e: React.MouseEvent) => {
		const element = e.target as HTMLInputElement;
		if (element.classList.contains("details")) {
			document.body.style.overflow = "auto";
			nagivate("/");
		}
	};

	//Get Stars
	const getStars = () => {
		const stars = [];
		if (details) {
			const rating = Math.floor(details.rating);
			for (let i = 1; i <= 5; i++) {
				if (i <= rating) {
					stars.push(<img alt="star" key={i} src={starFull}></img>);
				} else {
					stars.push(<img alt="star" key={i} src={starEmpty}></img>);
				}
			}
		}
		return stars;
	};

	const getPlatform = (platform: string): string => {
		switch (platform) {
			case "Playstation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
			case "macOS":
				return apple;
			default:
				return gamepad;
		}
	};

	// if (loading) {
	// 	return (
	// 		<BallTriangle
	// 			height={100}
	// 			width={100}
	// 			radius={5}
	// 			color="#ff7676"
	// 			ariaLabel="ball-triangle-loading"
	// 			visible={true}
	// 			wrapperStyle={{
	// 				minHeight: "100vh",
	// 				display: "flex",
	// 				justifyContent: "center",
	// 				alignItems: "center",
	// 			}}
	// 		/>
	// 	);
	// }

	// TODO: make the loading to spinner

	return (
		<>
			{!loading && (
				<CardShadow className="details" onClick={handleExitDetails}>
					<Detail layoutId={pathId}>
						<Stats>
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>
									{details?.name}
								</motion.h3>
								<motion.p layoutId={`date ${pathId}`}>
									Rating: {details?.rating}
								</motion.p>
								{getStars()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{details?.platforms.map((data) => (
										<img
											src={getPlatform(data.platform.name)}
											key={data.platform.id}
											alt={data.platform.name}
										/>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							{details && (
								<motion.img
									layoutId={`img ${pathId}`}
									src={resizedImg(details.background_image, 1280)}
									alt={details?.name}
								/>
							)}
						</Media>
						<Description>
							<p>{details?.description_raw}</p>
						</Description>
						<div className="gallery">
							{screenshots.map((screen) => (
								<GalleryImg
									src={resizedImg(screen.image, 1280)}
									key={screen.id}
									alt={"screenshots"}
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			)}
		</>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: #fff;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img {
		width: 2rem;
		height: 2rem;
		display: inline;
	}
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;
const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`;

const GalleryImg = styled.img`
	margin: 2px 0;
`;

export default GameDetails;
