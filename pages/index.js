import Carousel from "~components/banner-slider";
import Footer from "~components/footer";
import Header from "~components/header";
import Destinations from "~components/main-page/destinations";
import Experiences from "~components/main-page/experiences";
import Script from "next/script";
import { NextSeo } from "next-seo";
import { getPageTitle, pagesConfig } from "lib/config";
import WhyUs from "~components/main-page/why-us";
import Trending from "~components/main-page/trending";
import Testimonials from "~components/main-page/testimonials";
import About from "~components/main-page/about";
import { Box } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<NextSeo
				title={getPageTitle(pagesConfig.home.title)}
				description={pagesConfig.home.description}
			/>

			{
				// eslint-disable-next-line no-undef
				process.env.NODE_ENV === "production" && (
					// eslint-disable-next-line @next/next/inline-script-id
					<Script
						dangerouslySetInnerHTML={{
							__html: `
                        window.$crisp=[];
                        window.CRISP_WEBSITE_ID="2d86c2fe-bccd-4be9-b4a3-4f00364d38ea";
                        (function(){d=document;
                           s=d.createElement("script");
                           s.src="https://client.crisp.chat/l.js";
                           s.async=1;
                           d.getElementsByTagName("head")[0].appendChild(s);
                        })();
                     `,
						}}
					/>
				)
			}

			<Header isTransparent={true} />
			<Box as="main">
				<Carousel />
				<About />
				<WhyUs />
				<Destinations />
				<Experiences />
				<Trending />
				<Testimonials />
				<Footer />
			</Box>
		</>
	);
}
