export const sitemap = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
];

export const pagesConfig = {
	blog: {
		title: "Blog",
		description: "Read Our Blog on all kinds of topics",
	},
};

export const getPageTitle = (title) => {
	return `${title} - Demaloo Global`;
};
