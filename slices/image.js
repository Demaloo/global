import { AspectRatio, Box, Stack, Text } from "@chakra-ui/react";
import NextImage from "next/image";

const ImageSliceBanner = ({ ratio = 2, alt, url }) => {
	return (
		<Box mb="6" textAlign="center">
			<AspectRatio
				width="100%"
				position="relative"
				overflow="hidden"
				borderRadius="md"
				ratio={ratio}
				mb="3"
				bg="gray.50"
			>
				<NextImage
					src={url}
					alt={alt}
					layout="fill"
					objectFit="cover"
					// placeholder="blur"
				/>
			</AspectRatio>
			{alt && (
				<Text as="span" color="gray.500" fontSize="sm" textAlign="center">
					{alt}
				</Text>
			)}
		</Box>
	);
};

const ImageSlice = ({ slice }) => {
	return (
		<Stack my={10} spacing={[4, null, 10]}>
			{slice.items.map(
				(
					{
						image: {
							url,
							alt,
							dimensions: { width, height },
						},
					},
					idx
				) => (
					<ImageSliceBanner
						key={idx}
						ratio={(width / height).toFixed(2)}
						alt={alt}
						url={url}
					/>
				)
			)}
		</Stack>
	);
};

export default ImageSlice;
