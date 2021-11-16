import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Container,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";
import { getPageTitle } from "lib/config";
import Header from "~components/header";
import Footer from "~components/footer";

const faqs = [
	{
		question: "What is the COVID situation in Central Asian Countries",
		answer: "The COVID situation in Central Asia is moderately ....",
	},
	{
		question: "Are Central Asian countries safe to visit for women alone?",
		answer:
			"The safety index for travelling in Central Asian countries are among ....",
	},
	{
		question: "Is winter time is worth visiting Kyrgyzstan?",
		answer:
			"Kyrgyzstan has a lot of places to offer in winter time, such as ....",
	},
	{
		question: "Is Internet speed good in Uzbekistan?",
		answer: "The internet speed in Uzbekistan is considered on of the ....",
	},
	{
		question:
			"Do you provide accomodotion and car rent services upon arrival?",
		answer:
			"We provide all of the types of services for your disposal, such as ....",
	},
];

const FaqsPage = () => {
	return (
		<>
			<NextSeo
				title={getPageTitle("FAQs")}
				description="Frequently asked questions about tourism in Central Asia"
			/>

			<Header />
			<Box>
				<Container maxW="container.xl" mt="100px">
					<Box>
						<Faqs faqs={faqs} />
					</Box>
				</Container>
				<Footer />
			</Box>
		</>
	);
};

const Faqs = ({ faqs }) => {
	return (
		<Accordion allowToggle={true} allowMultiple={true}>
			{faqs.map(({ question, answer }, idx) => (
				<AccordionItem
					key={idx}
					borderTop="none"
					boxShadow="0px 6px 10px rgba(0, 0, 0, 0.03)"
					border="1px solid #E5EAF4"
					borderRadius="8px"
					mb="4"
				>
					{({ isExpanded }) => (
						<>
							<h2>
								<AccordionButton
									p={[3, null, 6]}
									borderRadius="8px"
									_focus={{
										boxShadow: "none",
									}}
								>
									<Box
										flex="1"
										textAlign="left"
										color={isExpanded && "brand"}
									>
										{question}
									</Box>
									{isExpanded ? (
										<MinusIcon fontSize="12px" />
									) : (
										<AddIcon fontSize="12px" />
									)}
								</AccordionButton>
							</h2>
							<AccordionPanel color="#5A7184">{answer}</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	);
};

export default FaqsPage;
