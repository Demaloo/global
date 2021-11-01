import {
	AspectRatio,
	Box,
	Container,
	Grid,
	Heading,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";

const experiences = [
	{
		image: "/experiences/experience-image-1.jpeg",
		title: "Horse Riding",
		location: "Osh, Kyrgyzstan",
	},
	{
		image: "/experiences/experience-image-2.jpeg",
		title: "Authentic Nomadic Life",
		location: "Talas, Kyrgyzstan",
	},
	{
		image: "/experiences/experience-image-3.jpeg",
		title: "Milky Way View from Jailoo",
		location: "Batken, Kyrgyzstan",
	},
	{
		image: "/experiences/experience-image-4.jpeg",
		title: "Hiking To Wildest Places",
		location: "Naryn, Kyrgyzstan",
	},
	{
		image: "/experiences/experience-image-5.jpeg",
		title: "Nomadic Cuisine",
		location: "Tashkent, Uzbekistan",
	},
	{
		image: "/experiences/experience-image-6.jpeg",
		title: "Nomadic Lifestyle",
		location: "Almaty, Kazakhstan",
	},
];

const Experiences = () => {
	return (
		<>
			<Box as="section" my={("100px", null, "150px")}>
				<Container maxW="container.xl">
					<Box>
						<Heading
							textAlign={["start", null, "center"]}
							mb="50px"
							size="lg"
							fontWeight="semibold"
						>
							Best Experiences
						</Heading>
					</Box>

					<Grid
						templateColumns={["repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
						rowGap={[10, null, 14]}
						columnGap={[4, null, 6]}
					>
						{experiences.map(({ image, title, location }, idx) => (
							<Box key={idx}>
								<ExperienceImage image={image} title={title} />
								<Text fontSize="sm" color="gray.500" mb="2">
									{location}
								</Text>
								<Heading
									fontSize={["xl", null, "2xl"]}
									fontWeight="semibold"
								>
									{title}
								</Heading>
							</Box>
						))}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

const ExperienceImage = ({ image, title }) => {
	return (
		<AspectRatio position="relative" ratio={3 / 2} mb="3" bg="gray.100">
			<NextImage src={image} alt={title} layout="fill" objectFit="cover" />
		</AspectRatio>
	);
};

export default Experiences;
