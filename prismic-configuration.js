export const apiEndpoint = "https://demaloo-global.prismic.io/api/v2";

export const linkResolver = (doc) => {
	if (doc.type === "blog_post") {
		return `/blog/${doc.uid}`;
	}

	return "/";
};
