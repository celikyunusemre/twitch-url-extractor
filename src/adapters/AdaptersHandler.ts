export const Timeout = () => {
    const time = 60;
	let controller = new AbortController();
	setTimeout(() => controller.abort(), time * 1000);
	return controller;
};

