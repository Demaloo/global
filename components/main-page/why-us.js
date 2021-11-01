import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const features = [
	{
		image: "",
		title: "Local expertise",
		description: "From local gems to highlights, our agents have you covered",
	},
	{
		image: "",
		title: "100% tailor-made",
		description: "Customize a tour based around your needs and interests",
	},
	{
		image: "Cost-Efficient Pricing",
		title: "Cost-Efficient Pricing",
		description: "Our prices don't include any middleman fee",
	},
	{
		image: "Our guarantees",
		title: "Our guarantees",
		description:
			"We're an ASTA member and provide a range of safety guarantees",
	},
];

const Feature = ({ title, description }) => (
	<Box>
		<NextImage src="/feature-icon-example.png" width="60px" height="60px" />
		<Heading my="3" fontSize={["md", null, "2xl"]}>
			{title}
		</Heading>
		<Text fontSize="sm">{description}</Text>
	</Box>
);

const WhyUs = () => {
	return (
		<Box as="section" my="100px" bg="brand" py="80px" color="white">
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
