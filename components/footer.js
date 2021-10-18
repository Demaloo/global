import {
	Box,
	Container,
	Stack,
	Text,
	Link,
	Heading,
	Flex,
} from "@chakra-ui/react";
import { sitemap } from "lib/config";
import NextLink from "next/link";
import Logo from "./logo";

const Footer = () => {
	return (
		<Box as="footer">
			<Container maxW="container.lg">
				<Flex
					py={["50px", "100px"]}
					justifyContent={["flex-start", "center"]}
				>
					<Stack spacing="6" maxW="300px">
						<Logo />
						<Text fontSize="sm">
							Weve counted billions of page views for thousands of
							customers, all without ever compromising anyone’s privacy.
						</Text>
						<Text as="span" color="gray.500">
							© Demaloo 2021
						</Text>
					</Stack>

					<Stack
						spacing="2"
						textAlign={["start"]}
						display={["none", "flex"]}
						ml="50px"
					>
						<Heading as="h4" size="xs" mb="2">
							Company
						</Heading>
						{sitemap.map(({ title, href }) => {
							return (
								<NextLink key={href + title} href={href} passHref>
									<Link fontSize="sm">{title}</Link>
								</NextLink>
							);
						})}
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
