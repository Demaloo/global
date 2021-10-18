import Prismic from "@prismicio/client";
import { apiEndpoint } from "prismic-configuration";

const createClientOptions = (req = null, prismicAccessToken = null) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken
		? { accessToken: prismicAccessToken }
		: {};
	return {
		...reqOption,
		...accessTokenOption,
	};
};

export const Client = (req = null) =>
	Prismic.client(
		apiEndpoint,
		// eslint-disable-next-line no-undef
		createClientOptions(req, process.env.PRISMIC_TOKEN)
	);

export default Client;
