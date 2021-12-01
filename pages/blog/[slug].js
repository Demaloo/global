import {
	AspectRatio,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Heading,
	Text,
} from "@chakra-ui/react";
import SliceMachine from "~components/slice_machine";
import Prismic from "@prismicio/client";
import { Client } from "lib/prismic";
import { queryBlogPost } from "lib/queries";
import Header from "~components/header";
// import { format } from "date-fns";
import NextImage from "next/image";
import NextLink from "next/link";
import Footer from "~components/footer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";
import { getPageTitle } from "../../lib/config";
import { format, isValid } from "date-fns";

export async function getStaticPaths() {
	const response = await Client().query(
		Prismic.Predicates.at("document.type", "blog_post")
	);

	const paths = response.results.map((blogPost) => {
		return {
			params: {
				slug: blogPost.uid,
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;

	const blogPost = await queryBlogPost(slug, {
		graphQuery: `{
         blog_post {
            ...blog_postFields
            categories {
               category {
                  ...on category {
                     tag
                  }
               }
            }
         }
      }
      `,
	});

	return {
		props: {
			blogPost,
		},
	};
}

const BlogPage = ({ blogPost }) => {
	if (!blogPost) {
		return null;
	}

	const { title, slices, createdAt, cover, short_description } = blogPost;

	return (
		<>
			<NextSeo title={getPageTitle(title)} description={short_description} />
			<Header />
			<Box as="main">
				<Container maxW="container.lg" my={["80px", null, "100px"]}>
					<Box>
						<Breadcrumb
							spacing="8px"
							mb="50px"
							separator={<ChevronRightIcon color="gray.500" />}
						>
							<BreadcrumbItem>
								<NextLink href="/" passHref>
									<BreadcrumbLink>Home</BreadcrumbLink>
								</NextLink>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<NextLink href="/blog" passHref>
									<BreadcrumbLink>Blog</BreadcrumbLink>
								</NextLink>
							</BreadcrumbItem>
							<BreadcrumbItem isCurrentPage>
								<BreadcrumbLink>{title}</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>

						<Heading pb="4" textAlign="center">
							{title}
						</Heading>

						<Text pb="10" color="gray.500" textAlign="center">
							{isValid(new Date(createdAt)) && (
								<Text as="span" fontSize="sm">
									{format(new Date(createdAt), "MMMM dd, yyyy")}
								</Text>
							)}
						</Text>

						<AspectRatio
							width="100%"
							position="relative"
							overflow="hidden"
							borderRadius="md"
							ratio={2 / 1}
						>
							<NextImage
								src={cover}
								layout="fill"
								objectFit="cover"
								alt={title}
							/>
						</AspectRatio>
					</Box>
				</Container>
				<Container maxW="container.sm">
					<SliceMachine slices={slices} />
				</Container>
			</Box>

			<Footer />
		</>
	);
};

export default BlogPage;
