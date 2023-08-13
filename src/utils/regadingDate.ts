
export const showDate = (inputDate = new Date()) => {
	//const options = { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' };
	const options = {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		timeZone: "Australia/Sydney",
		timeZoneName: "short",
	} as const;
	return new Intl.DateTimeFormat('en-US', options).format(inputDate);
}