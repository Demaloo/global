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
	home: {
		title: "Demtrips: Custom tours in Central Asia by local guides & tour operators.",
		description:
			"Experience authentic culture of Central Asia with convenient and safe way to plan and book your customized trip.",
	},
	blog: {
		title: "Demtrips Blog - Articles, Guides & Latest News.",
		description: "Learn about the latest news and announcements.",
	},
};

export const getPageTitle = (title) => {
	return `${title} - Demaloo Global`;
};
