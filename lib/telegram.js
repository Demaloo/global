export async function sendTelegramMessage(message) {
	const url = `https://api.telegram.org/bot2142583449:AAHwIloPanK2JR4rBAZh_yRwHWRRF1X6DJM/sendMessage`;

	return fetch(`${url}?chat_id=${"-708149505"}&text=${message}`, {
		method: "POST",
	});
}
