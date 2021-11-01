import { Box } from "@chakra-ui/react";
import Carousel from "~components/banner-slider";
import Header from "~components/header";
import Layout from "~components/layout";
import Destinations from "~components/main-page/destinations";

export default function Home() {
	return (
		<>
			<Header isTransparent={true} />
			<Layout>
				<Carousel />
				<Destinations />
				<Box height="400px"></Box>
			</Layout>
		</>
	);
}
