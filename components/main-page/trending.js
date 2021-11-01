import { Container, Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const Trending = () => {
	return (
		<Box as="section" my={["100px", null, "150px"]}>
			<Container maxW="container.xl">
				<Box>
					<Heading
						textAlign={["start", null, "center"]}
						mb="50px"
						fontWeight="semibold"
						size="lg"
					>
						Trending Now
					</Heading>
				</Box>
				<Box position="relative" height="300px">
					<NextImage
						src="/trending-image.jpeg"
						layout="fill"
						objectFit="cover"
					/>
					<Flex
						position="absolute"
						top="0"
						bottom="0"
						left="0"
						right="0"
						flexDirection="column"
						justifyContent="flex-end"
						alignItems="flex-start"
						padding="8"
						color="white"
						bg="linear-gradient(360deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 50%)"
					>
						<Heading mb="4">Karakol</Heading>
						<Text fontWeight="bold" fontSize="lg">
							Our top pick of the moment
						</Text>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Trending;
