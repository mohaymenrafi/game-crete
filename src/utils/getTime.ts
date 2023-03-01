export const getMonth = (): string => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return `${month}`;
	}
};
export const getDay = (): string => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return `${day}`;
	}
};

export const getYear = (): number => {
	const year = new Date().getFullYear();
	return year;
};
