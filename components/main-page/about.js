import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	Stack,
} from "@chakra-ui/react";
import { loader } from "lib/loader";
import NextImage from "next/image";

const About = ({ features }) => {
	return (
		<>
			<Box as="section" pt={["100px", null, "150px"]}>
				<Container maxW="container.xl">
					<Stack spacing={[20]}>
						{features.map(({ title, image, description }, idx) => (
							<Grid
								key={"features" + idx}
								templateColumns={["1fr", null, "1fr 1fr"]}
								gap={[6, null, 20]}
							>
								<Flex
									alignItems="center"
									order={[null, null, idx % 2 === 0 ? 1 : -1]}
								>
									<Flex
										flexDirection="column"
										alignItems="start"
										justifyContent={["flex-start", null, "flex-end"]}
										maxW={["none", null, "500px"]}
									>
										<Heading mb={[8, null, 10]} size="xl">
											{title}
										</Heading>
										<Text mb={[8, null, 10]}>{description}</Text>
									</Flex>
								</Flex>
								<Flex
									alignItems="center"
									justifyContent="flex-end"
									// display={["none", null, "flex"]}
									width="100%"
								>
									<AspectRatio
										ratio={3 / 2}
										position="relative"
										width="100%"
										height="100%"
										borderRadius="md"
										overflow="hidden"
									>
										<NextImage
											src={image}
											layout="fill"
											alt={title}
											objectFit="cover"
											loader={loader}
										/>
									</AspectRatio>
								</Flex>
							</Grid>
						))}
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default About;
