import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { selectDetails } from "../features/details/detailsReducer";

const GameDetails = () => {
	const { details, screenshots, loading } = useAppSelector(selectDetails);
	const nagivate = useNavigate();

	const handleExitDetails = (e: React.MouseEvent) => {
		const element = e.target as HTMLInputElement;
		if (element.classList.contains("details")) {
			document.body.style.overflow = "auto";
			nagivate("/");
		}
	};

	// TODO: make the loading to spinner

	return (
		<CardShadow className="details" onClick={handleExitDetails}>
			<Detail>
				{loading === "idle" ? (
					<h2>Loading</h2>
				) : (
					<>
						<Stats>
							<div className="rating">
								<h3>{details?.name}</h3>
								<p>Rating: {details?.rating}</p>
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{details?.platforms.map((data) => (
										// <img
										//     alt={data.name}
										//     key={data.id}
										//     src={g}
										// />
										<h3 key={data.platform.id}>{data.platform.name}</h3>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img src={details?.background_image} alt={details?.name} />
						</Media>
						<Description>
							<p>{details?.description_raw}</p>
						</Description>
						<div className="gallery">
							{screenshots.map((screen) => (
								<GalleryImg
									src={screen.image}
									key={screen.id}
									alt={"screenshots"}
								/>
							))}
						</div>
					</>
				)}
			</Detail>
		</CardShadow>
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
