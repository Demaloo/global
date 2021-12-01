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
import { useAtom } from "jotai";
import { requestAtom } from "state";

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
	const [sliderRef, slider] = useKeenSlider({
		slides: 3,
		loop: true,
		duration: 1500,
		move(s) {
			const new_opacities = s
				.details()
				.positions.map((slide) => slide.portion);
			setOpacities(new_opacities);
		},
	});

	const [, setRequestModalOpen] = useAtom(requestAtom);

	return (
		<Box
			as="section"
			ref={sliderRef}
			width="100%"
			height="100vh"
			position="relative"
			overflow="hidden"
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
							<NextImage src={image} layout="fill" objectFit="cover" />
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
				<Container height="100%" maxW="container.xl">
					<Flex
						height="100%"
						justifyContent="space-between"
						alignItems="center"
						color="white"
						flex="1"
						position="relative"
					>
						<Flex flexDirection="column" maxW="700px" alignItems="start">
							<Heading size="2xl" mb="6" lineHeight="short">
								Faboulous Adventures Start with Demtrips
							</Heading>
							<Text
								lineHeight="taller"
								fontSize="lg"
								mb="8"
								display={["none", null, "block"]}
							>
								Kayak (styled as KAYAK) is an American online travel
								agency and metasearch engine owned and operated by
								Booking Holdings.
							</Text>
							<Button
								size="lg"
								mb="10"
								onClick={() => {
									setRequestModalOpen(true);
								}}
							>
								Create Trip
							</Button>
						</Flex>
						<NextSlideButton
							icon={<ChevronRightIcon borderRadius="full" boxSize="6" />}
							onClick={() => {
								slider.next();
							}}
						/>
					</Flex>
				</Container>
			</Box>
		</Box>
	);
};

// {items[currIdx].category}

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
			borderColor="white"
			borderRadius="full"
			color="white"
			icon={icon}
			onClick={onClick}
		/>
	);
};

export default Carousel;
