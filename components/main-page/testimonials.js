import {
	Avatar,
	Box,
	Container,
	Flex,
	Grid,
	Heading,
	Text,
} from "@chakra-ui/react";

const testimonials = [
	{
		name: "Alexander Yarmin",
		from: "Sukubami, Indonesia",
		testimonial:
			"“Hade mang aslina euy mantap lah lumayan apalagi buat liburan nambah pengalamanjuga buat diri sendiri ”",
		photo: "/oliver.jpeg",
	},
	{
		name: "Alexander Yarmin",
		from: "Sukubami, Indonesia",
		testimonial:
			"“Hade mang aslina euy mantap lah lumayan apalagi buat liburan nambah pengalamanjuga buat diri sendiri ”",
		photo: "/oliver.jpeg",
	},
	{
		name: "Alexander Yarmin",
		from: "Sukubami, Indonesia",
		testimonial:
			"“Hade mang aslina euy mantap lah lumayan apalagi buat liburan nambah pengalamanjuga buat diri sendiri ”",
		photo: "/oliver.jpeg",
	},
];

const Testimonials = () => {
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
					{testimonials.map(({ name, from, testimonial, photo }, idx) => (
						<Flex
							key={idx}
							flexDirection="column"
							padding={[4, null, 8]}
							bg="white"
							borderRadius="md"
						>
							<Flex mb="4">
								<Avatar src={photo} mr="4" />
								<Flex flexDir="column" justifyContent="center">
									<Text as="span" fontWeight="semibold">
										{name}
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
								{testimonial}
							</Text>
						</Flex>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Testimonials;
