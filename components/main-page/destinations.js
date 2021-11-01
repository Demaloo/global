import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const destinations = [
	{
		image: "/destinations/destination-image-1.jpeg",
		description:
			"This is the description for destination number 1 which is Kyrgyzstan",
		title: "Kyrgyzstan",
	},
	{
		image: "/destinations/destination-image-2.jpeg",
		description:
			"This is the description for destination number 2 which is Kazakhstan",
		title: "Kazakhstan",
	},
	{
		image: "/destinations/destination-image-3.jpeg",
		description:
			"This is the description for destination number 3 which is Uzbekistan",
		title: "Uzbekistan",
	},
	{
		image: "/destinations/destination-image-4.jpeg",
		description:
			"This is the description for destination number 4 which is Tajikistan",
		title: "Tajikistan",
	},
	{
		image: "/destinations/destination-image-5.jpeg",
		description:
			"This is the description for destination number 5 which is Turkmenistan",
		title: "Turkmenistan",
	},
];

function Destinations() {
	const slidesPerView = useBreakpointValue({
		base: 1,
		md: 3,
	});

	const spacing = useBreakpointValue({
		base: 0,
		md: 20,
	});

	const [sliderRef, slider] = useKeenSlider({
		mode: "free-snap",
		spacing,
		slidesPerView,
		dragSpeed: 0.5,
		duration: 1000,
	});

	return (
		<>
			<Box as="section" my="100px">
				<Container maxW="container.xl">
					<Box>
						<Heading textAlign="center" mb="50px">
							Destinations
						</Heading>
					</Box>
				</Container>
				<Box position="relative">
					<Box
						ref={sliderRef}
						className="keen-slider"
						pl={["0px", null, "100px"]}
					>
						{destinations.map(({ image, description, title }) => (
							<AspectRatio
								key={`${title}`}
								className="keen-slider__slide"
								ratio={[1, null, 8 / 5]}
							>
								<Box
									bg="gray.200"
									boxSize="full"
									borderRadius={[0, null, "md"]}
									overflow="hidden"
									position="relative"
								>
									<NextImage
										src={image}
										alt={title}
										layout="fill"
										objectFit="cover"
									/>
									<Flex
										boxSize="100%"
										flexDirection="column"
										position="absolute"
										top="0"
										left="0"
										background="linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)"
										color="white"
										padding="4"
										justifyContent="flex-end"
									>
										<Heading size="lg" mb="3">
											{title}
										</Heading>
										<Text>{description}</Text>
									</Flex>
								</Box>
							</AspectRatio>
						))}
					</Box>

					<SliderButton
						position="absolute"
						right="2rem"
						top="50%"
						transform="translateY(-50%)"
						icon={<ChevronRightIcon boxSize="8" />}
						onClick={() => {
							slider.next();
						}}
					/>

					<SliderButton
						position="absolute"
						left="2rem"
						top="50%"
						transform="translateY(-50%)"
						icon={<ChevronLeftIcon boxSize="8" />}
						onClick={() => {
							slider.prev();
						}}
					/>
				</Box>
			</Box>
		</>
	);
}

const SliderButton = ({ icon, onClick, ...props }) => {
	return (
		<IconButton
			size="lg"
			variant="outline"
			_hover={{
				color: "white",
				bg: "saryy",
			}}
			_active={{
				transform: "translateY(-50%) scale(1.1)",
			}}
			borderColor="white"
			borderRadius="full"
			color="white"
			icon={icon}
			onClick={onClick}
			{...props}
		/>
	);
};

export default Destinations;
