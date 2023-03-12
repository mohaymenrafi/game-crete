export const resizedImg = (imgPath: string, size: number): string => {
	const imgURL: string = imgPath.match(/media\/screenshots/)
		? imgPath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
		: imgPath.replace("/media/games", `/media/resize/${size}/-/games`);
	return imgURL;
};
