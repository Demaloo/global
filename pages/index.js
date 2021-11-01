import { Box } from "@chakra-ui/react";
import Carousel from "~components/banner-slider";
import Header from "~components/header";

export default function Home() {
	return (
		<>
			<Header />
			<Carousel />
			<Box height="400px"></Box>
		</>
	);
}
