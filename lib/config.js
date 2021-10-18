export const sitemap = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "About",
		href: "/about",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Terms",
		href: "/",
	},
	{
		title: "Privacy",
		href: "/",
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
