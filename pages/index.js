import Carousel from "~components/banner-slider";
import Footer from "~components/footer";
import Header from "~components/header";
import Layout from "~components/layout";
import Destinations from "~components/main-page/destinations";
import Experiences from "~components/main-page/experiences";

export default function Home() {
	return (
		<>
			<Header isTransparent={true} />
			<Layout>
				<Carousel />
				<Destinations />
				<Experiences />
				{/* <Box height="400px"></Box> */}
				<Footer />
			</Layout>
		</>
	);
}
