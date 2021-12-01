import {
	AspectRatio,
	Container,
	Flex,
	Grid,
	Heading,
	Link,
	Tag,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { queryBlogPosts } from "lib/queries";
import BlogPost from "~components/blog_post";
import Header from "~components/header";
import Footer from "~components/footer";
import NextImage from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { pagesConfig } from "../../lib/config";
import { loader } from "lib/loader";
import { format, isValid } from "date-fns";

export async function getStaticProps() {
	let blogPosts = await queryBlogPosts({
		graphQuery: `{
         blog_post {
            title
            short_description
            cover
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
			blogPosts,
		},
	};
}

const LatestNews = ({
	cover,
	title,
	short_description,
	createdAt,
	slug,
	categories,
}) => {
	return (
		<Grid templateColumns={["1fr", null, "2fr 1fr"]} gap={[0, null, 10]}>
			<NextLink href={`/blog/${slug}`}>
				<a>
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
							loader={loader}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</AspectRatio>
				</a>
			</NextLink>
			<Flex flexDirection="column" justifyContent="center">
				<NextLink href={`/blog/${slug}`} passHref>
					<Link>
						<Heading size="md" fontWeight="semibold" py="4">
							{title}
						</Heading>
					</Link>
				</NextLink>

				<Text fontSize="sm" color="gray.500" pb="4">
					{short_description}
				</Text>

				<Text as="span" fontSize="sm">
					{isValid(new Date(createdAt)) && (
						<Text as="span" fontSize="sm">
							{format(new Date(createdAt), "MMMM dd, yyyy")}
						</Text>
					)}
				</Text>

				<Wrap mt="4" spacing="4">
					{categories.map((category, idx) => (
						<WrapItem key={idx}>
							<Tag>{category}</Tag>
						</WrapItem>
					))}
				</Wrap>
			</Flex>
		</Grid>
	);
};

const BlogPage = ({ blogPosts }) => {
	return (
		<>
			<NextSeo
				title={pagesConfig.blog.title}
				description={pagesConfig.blog.description}
			/>
			<Header />
			<Container
				as="section"
				maxW="container.lg"
				my={["80px", null, "100px"]}
			>
				<Grid
					templateColumns={[
						"repeat(1, 1fr)",
						null,
						null,
						"repeat(2, 1fr)",
					]}
					columnGap={[0, null, 10]}
					rowGap="20"
				>
					<Flex gridArea="1 / 1 / 2 / 3">
						<LatestNews {...blogPosts[0]} />
					</Flex>
					{blogPosts.slice(1).map(({ id, ...rest }) => (
						<BlogPost key={id} {...rest} />
					))}
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default BlogPage;
