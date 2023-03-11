export type CardInfo = {
	name: string;
	img: string;
	id: number;
	released: string;
};
export type ScreenShotType = {
	id: number;
	image: string;
	width: number;
	height: number;
	is_deleted: boolean;
};

type platforms = {
	id: number;
	name: string;
	image_background: string;
};

export type DetailsInfoType = {
	name: string;
	rating: number;
	platforms: { platform: platforms }[];
	description_raw: string;
	background_image: string;
} | null;
