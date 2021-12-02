import {
	AspectRatio,
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
} from "@chakra-ui/react";
import NextImage from "next/image";

const About = () => {
	return (
		<>
			<Box as="section" pt={["100px", null, "150px"]}>
				<Container maxW="container.xl">
					<Grid
						templateColumns={["1fr", null, "1fr 1fr"]}
						rowGap="20"
						columnGap="20"
					>
						<Flex alignItems="center">
							<Flex
								flexDirection="column"
								alignItems="start"
								justifyContent={["flex-start", null, "flex-end"]}
								maxW={["none", null, "500px"]}
							>
								<Heading mb={[8, null, 10]} size="xl">
									Become a nomad
								</Heading>
								<Text mb={[8, null, 10]}>
									Immerse yourself to a lifestyle of nomads, living in
									yurts, drinking horse milk, and cooking nan.
								</Text>
								<Button size="lg">Create Trip</Button>
							</Flex>
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="flex-end"
							display={["none", null, "flex"]}
						>
							<AspectRatio
								ratio={3 / 2}
								position="relative"
								width="100%"
								borderRadius="md"
								overflow="hidden"
							>
								<NextImage
									src="/main-about/main-about-barksoon-waterfall.jpeg"
									layout="fill"
									alt="waterfall"
									objectFit="cover"
								/>
							</AspectRatio>
						</Flex>
						<Flex alignItems="center" display={["none", null, "flex"]}>
							<AspectRatio
								ratio={3 / 2}
								position="relative"
								width="100%"
								borderRadius="md"
								overflow="hidden"
							>
								<NextImage
									src="/main-about/main-about-issyk-kul.jpeg"
									layout="fill"
									alt="waterfall"
									objectFit="cover"
								/>
							</AspectRatio>
						</Flex>
						<Flex justifyContent={["flex-start", null, "flex-end"]}>
							<Flex
								flexDirection="column"
								alignItems="start"
								justifyContent="center"
								maxW="500px"
							>
								<Heading mb={[8, null, 10]} size="xl">
									Untouched Nature
								</Heading>
								<Text mb={[8, null, 10]}>
									Untouched beauty of the Tien Shan mountains,
									unconquered peaks and untouched caves. Alpine
									pastures and horse breeders living in yurts are
									former nomads, the mysterious and alluring Lake
									Issyk-Kul. Contact with the nature is healing.
								</Text>
								<Button
									colorScheme="red"
									bg="brand"
									borderRadius="lg"
									fontSize="md"
									size="lg"
								>
									Create Trip
								</Button>
							</Flex>
						</Flex>
						<Flex alignItems="center">
							<Flex
								flexDirection="column"
								alignItems="start"
								justifyContent={["flex-start", null, "flex-end"]}
								maxW={["none", null, "500px"]}
							>
								<Heading mb={[8, null, 10]} size="xl">
									Unique experiences
								</Heading>
								<Text mb={[8, null, 10]}>
									Feel the atmosphere and experience unique experiences
									only in Central Asia.
								</Text>
								<Button size="lg">Create Trip</Button>
							</Flex>
						</Flex>
						<Flex
							alignItems="center"
							justifyContent="flex-end"
							display={["none", null, "flex"]}
						>
							<AspectRatio
								ratio={3 / 2}
								position="relative"
								width="100%"
								borderRadius="md"
								overflow="hidden"
							>
								<NextImage
									src="/main-about/main-about-barksoon-waterfall.jpeg"
									layout="fill"
									alt="waterfall"
									objectFit="cover"
								/>
							</AspectRatio>
						</Flex>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default About;
