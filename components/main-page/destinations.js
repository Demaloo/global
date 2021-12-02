import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	useBreakpointValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import NextImage from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

const destinations = [
	{
		image: "/destinations/destination-image-1.jpeg",
		title: "Kyrgyzstan",
	},
	{
		image: "/destinations/destination-image-2.jpeg",
		title: "Kazakhstan",
	},
	{
		image: "/destinations/destination-image-3.jpeg",
		title: "Uzbekistan",
	},
	{
		image: "/destinations/destination-image-4.jpeg",
		title: "Tajikistan",
	},
	{
		image: "/destinations/destination-image-5.jpeg",
		title: "Turkmenistan",
	},
];

function Destinations() {
	const [slideIndex, setSlideIndex] = useState(0);

	const slidesPerView = useBreakpointValue({
		base: 1,
		md: 3,
	});

	const spacing = useBreakpointValue({
		base: 0,
		md: 16,
	});

	const [sliderRef, slider] = useKeenSlider({
		mode: "free-snap",
		spacing,
		slidesPerView,
		dragSpeed: 0.5,
		duration: 1000,
		slideChanged(s) {
			setSlideIndex(s.details().relativeSlide);
		},
	});

	return (
		<>
			<Box as="section" my={["100px", null, "150px"]}>
				<Container maxW="container.xl">
					<Box>
						<Heading
							textAlign={["start", null, "center"]}
							mb="50px"
							fontWeight="semibold"
							size="lg"
						>
							Destinations
						</Heading>
					</Box>
				</Container>
				{slider && (
					<Box position="relative">
						<Box
							ref={sliderRef}
							className="keen-slider"
							pl={["0px", null, "100px"]}
						>
							{destinations.map(({ image, title }) => (
								<AspectRatio
									key={`${title}`}
									className="keen-slider__slide"
									ratio={[1, null, 5 / 4]}
								>
									<Box
										bg="gray.200"
										boxSize="full"
										borderRadius={[0, null, "md"]}
										overflow="hidden"
										position="relative"
									>
										<Box position="relative" boxSize="full">
											<NextImage
												src={image}
												alt={title}
												layout="fill"
												objectFit="cover"
											/>
										</Box>
										<Flex
											boxSize="100%"
											flexDirection="column"
											position="absolute"
											top="0"
											left="0"
											background="linear-gradient(to top, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.1) 50%)"
											color="white"
											padding="4"
											justifyContent="flex-end"
										>
											<Heading size="lg" mb="2">
												{title}
											</Heading>
										</Flex>
									</Box>
								</AspectRatio>
							))}
						</Box>

						{slideIndex === 0 ? null : (
							<SliderButton
								position="absolute"
								left={[4, null, 8]}
								top="50%"
								transform="translateY(-50%)"
								icon={<ChevronLeftIcon boxSize={8} />}
								onClick={() => {
									slider.prev();
								}}
							/>
						)}

						{(slidesPerView === 3 && slideIndex === 2) ||
							(slidesPerView === 1 && slideIndex === 4 ? null : (
								<SliderButton
									position="absolute"
									right={[4, null, 8]}
									top="50%"
									transform="translateY(-50%)"
									icon={<ChevronRightIcon boxSize={8} />}
									onClick={() => {
										slider.next();
									}}
								/>
							))}
					</Box>
				)}
			</Box>
		</>
	);
}

const SliderButton = ({ icon, onClick, ...props }) => {
	const buttonSize = useBreakpointValue({
		base: "md",
		md: "lg",
	});

	return (
		<IconButton
			size={buttonSize}
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
