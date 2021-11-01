import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	IconButton,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import NextImage from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const items = [
	{
		image: "/banners/slider-banner-1.jpeg",
		category: "Camping",
	},
	{
		image: "/banners/slider-banner-2.jpeg",
		category: "Trekking",
	},
	{
		image: "/banners/slider-banner-3.jpeg",
		category: "Horse Riding",
	},
];

const Carousel = () => {
	const [opacities, setOpacities] = useState([]);
	const [currIdx, setCurrIdx] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		slides: 3,
		loop: true,
		duration: 1500,
		slideChanged(s) {
			setCurrIdx(s.details().relativeSlide);
		},
		move(s) {
			const new_opacities = s
				.details()
				.positions.map((slide) => slide.portion);
			setOpacities(new_opacities);
		},
	});

	return (
		<Box
			ref={sliderRef}
			width="100%"
			height="100vh"
			position="relative"
			overflow="hidden"
			marginY="-3rem"
		>
			{items.map(({ image }, idx) => (
				<Box
					key={idx}
					boxSize="100%"
					position="absolute"
					top="0"
					style={{ opacity: opacities[idx] }}
				>
					<Box
						transform="translateY(-50%) translateX(-50%)"
						boxSize="100%"
						position="absolute"
						top="50%"
						left="50%"
					>
						<Box position="relative" boxSize="100%">
							<NextImage
								src={image}
								layout="fill"
								objectFit="cover"
								quality={50}
							/>
						</Box>
					</Box>
				</Box>
			))}
			<Box
				flexDir="column"
				height="100%"
				position="absolute"
				top="0"
				left="0"
				boxSize="100%"
				bg="rgba(0, 0, 0, 0.5)"
				width="100%"
			>
				<Container height="100%" maxW="container.lg">
					<Flex
						justifyContent="space-between"
						alignItems="center"
						height="100%"
						color="white"
					>
						<Flex flexDirection="column" maxW="700px" alignItems="start">
							<Heading size="2xl" mb="6" lineHeight="short">
								Faboulous Adventures Start with Demtrips
							</Heading>
							<Text lineHeight="taller" fontSize="lg" mb="8">
								Kayak (styled as KAYAK) is an American online travel
								agency and metasearch engine owned and operated by
								Booking Holdings.
							</Text>
							<Button
								colorScheme="red"
								borderRadius="lg"
								fontSize="md"
								size="lg"
							>
								CREATE TRIP
							</Button>
						</Flex>
						<Flex
							flexDirection="column"
							height="100%"
							alignItems="flex-end"
						>
							<Flex flex="1" alignItems="center">
								<NextSlideButton
									icon={<ChevronRightIcon />}
									onClick={() => {
										slider.next();
									}}
								/>
							</Flex>
							<Box
								padding="4"
								px="6"
								backgroundColor="rgba(0, 0, 0, 0.3)"
								borderRadius="lg"
							>
								<Text
									as="span"
									color="white"
									fontWeight="bold"
									fontSize="2xl"
								>
									{items[currIdx].category}
								</Text>
							</Box>
						</Flex>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
};

const NextSlideButton = ({ icon, onClick }) => {
	return (
		<IconButton
			size="lg"
			variant="outline"
			_hover={{
				color: "white",
				bg: "saryy",
			}}
			_active={{
				transform: "scale(1.1)",
			}}
			borderColor="saryy"
			icon={icon}
			onClick={onClick}
			borderRadius="full"
		/>
	);
};

export default Carousel;
