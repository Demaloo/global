import Client from "./prismic";
import Prismic from "@prismicio/client";

const parseBlogPosts = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { title, short_description, categories, cover },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	title,
	short_description,
	cover: cover.url,
	categories: categories.map((el) => el.category.data.tag),
});

export async function queryBlogPosts(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "blog_post"),
		{
			pageSize: 10,
			orderings: "[document.last_publication_date desc]",
			...options,
		}
	);

	return response.results.map((item) => {
		return parseBlogPosts(item);
	});
}

const parseBlogPost = ({
	id,
	uid,
	first_publication_date,
	last_publication_date,
	data: { title, short_description, categories, cover, body },
}) => ({
	id,
	slug: uid,
	createdAt: first_publication_date,
	changedAt: last_publication_date,
	title,
	short_description,
	cover: cover.url,
	categories: categories.map((el) => el.category.data.tag),
	slices: body,
});

export async function queryBlogPost(slug, options) {
	const response = await Client().query(
		Prismic.Predicates.at("my.blog_post.uid", slug),
		{
			pageSize: 10,
			orderings: "[document.last_publication_date desc]",
			...options,
		}
	);

	return parseBlogPost(response.results[0]);
}

export async function queryTestimonials(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "testimonials"),
		{
			...options,
		}
	);

	return response.results[0].data.items.map(
		({ full_name, from, text, photo }) => ({
			fullName: full_name,
			from,
			text,
			photo: photo.url,
		})
	);
}

export async function queryMainPage(options) {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "main_page"),
		{
			...options,
		}
	);

	return {
		features: response.results[0].data.features.map(
			({ image, title, description }) => ({
				title,
				description,
				image: image.url,
			})
		),
	};
}
