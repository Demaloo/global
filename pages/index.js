import Carousel from "~components/banner-slider";
import Footer from "~components/footer";
import Header from "~components/header";
import Layout from "~components/layout";
import Destinations from "~components/main-page/destinations";
import Experiences from "~components/main-page/experiences";
import Script from "next/script";

export default function Home() {
	return (
		<>
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
