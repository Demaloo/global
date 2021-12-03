import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import BlogPost from "~components/blog_post";

const LatestNews = ({ posts }) => {
	return (
		<Box as="section" py={["100px", null, "150px"]} bg="gray.100">
			<Container maxW="container.xl">
				<Box>
					<Heading
						textAlign={["start", null, "center"]}
						mb="50px"
						size="lg"
						fontWeight="semibold"
					>
						Latest News
					</Heading>
				</Box>
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
					columnGap={[4, null, 4]}
					rowGap="10"
				>
					{posts.map(({ id, ...rest }) => (
						<BlogPost key={id} {...rest} categoriesAreVisible={false} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default LatestNews;
