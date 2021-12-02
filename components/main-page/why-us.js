import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const features = [
	{
		image: "",
		title: "Personalized Trip ",
		description: "Unique trips made only for you. ",
	},
	{
		image: "",
		title: "Verified guides/hosts",
		description:
			"All our service providers are verified. Security is guaranteed. ",
	},
	{
		image: "Cost-Efficient Pricing",
		title: "Best experts",
		description:
			"Best experts are local guides, connect directly with the best experts in Central Asia.",
	},
	{
		image: "Our guarantees",
		title: "Price",
		description:
			"We offer secure payment and affordable prices without any intermediary.",
	},
];

const Feature = ({ title, description }) => (
	<Box>
		<NextImage src="/feature-icon-example.png" width="60px" height="60px" />
		<Heading my="3" size="md">
			{title}
		</Heading>
		<Text fontSize="sm">{description}</Text>
	</Box>
);

const WhyUs = () => {
	return (
		<Box
			as="section"
			my={["100px", null, "150px"]}
			bg="brand"
			py="80px"
			color="white"
		>
			<Container maxW="container.xl">
				<Box>
					<Heading mb="50px" size="lg" fontWeight="semibold">
						Why Choose Us
					</Heading>
				</Box>
				<Grid
					templateColumns={["repeat(2, 1fr)", null, "repeat(4, 1fr)"]}
					gap={[6, null, 10]}
				>
					{features.map(({ image, title, description }) => (
						<Feature
							key={title}
							title={title}
							description={description}
							image={image}
						/>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default WhyUs;
