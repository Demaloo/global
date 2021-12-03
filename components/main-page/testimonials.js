import {
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
	Image,
} from "@chakra-ui/react";

const Testimonials = ({ testimonials }) => {
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
						Testimonials
					</Heading>
				</Box>
				<Grid
					templateColumns={["repeat(1, 1fr)", null, "repeat(3, 1fr)"]}
					columnGap={[4, null, 4]}
					rowGap="10"
				>
					{testimonials.map(({ fullName, from, text, photo }, idx) => (
						<Flex
							key={idx}
							flexDirection="column"
							padding={[4, null, 8]}
							bg="white"
							borderRadius="md"
						>
							<Flex mb="4">
								<Image
									src={photo}
									alt={fullName}
									boxSize="80px"
									borderRadius="full"
									overflow="hidden"
									mr="4"
									objectFit="cover"
								/>

								<Flex flexDir="column" justifyContent="center">
									<Text as="span" fontWeight="semibold">
										{fullName}
									</Text>
									<Text as="span" fontSize="sm" color="#999999">
										{from}
									</Text>
								</Flex>
							</Flex>
							<Text
								as="i"
								color="#999999"
								textStyle="italic"
								lineHeight="tall"
							>
								{text}
							</Text>
						</Flex>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Testimonials;
