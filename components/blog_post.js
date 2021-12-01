import {
	Box,
	Heading,
	Link,
	Tag,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { format, isValid } from "date-fns";
import { loader } from "lib/loader";
import NextImage from "next/image";
import NextLink from "next/link";
// import { format } from "date-fns";

// TODO
// add changedAt date

const BlogPost = ({
	cover,
	title,
	short_description,
	categories,
	createdAt,
	slug,
}) => {
	return (
		<Box maxW="500px" width="100%" mx="auto">
			<NextLink href={`/blog/${slug}`}>
				<a>
					<Box
						height={["180px", "250px"]}
						position="relative"
						overflow="hidden"
						borderRadius="md"
					>
						<NextImage
							src={cover}
							layout="fill"
							objectFit="cover"
							alt={title}
							loader={loader}
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</Box>
				</a>
			</NextLink>

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
		</Box>
	);
};

export default BlogPost;
