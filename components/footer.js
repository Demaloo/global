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
		<Box
			as="footer"
			py={["50px", "100px"]}
			border="1px solid"
			borderColor="gray.300"
		>
			<Container maxW="container.lg">
				<Flex justifyContent="space-between" mb="10">
					<Stack spacing="6">
						<Logo />
						<Text fontSize="sm" maxW="300px">
							Weve counted billions of page views for thousands of
							customers, all without ever compromising anyone’s privacy.
						</Text>
					</Stack>

					<Stack
						spacing="2"
						textAlign={["start"]}
						display={["none", "flex"]}
						ml="50px"
					>
						<Heading as="h4" size="xs" mb="2">
							Legal
						</Heading>
						{sitemap.map(({ title, href }) => {
							return (
								<NextLink key={href + title} href={href} passHref>
									<Link fontSize="sm">{title}</Link>
								</NextLink>
							);
						})}
					</Stack>

					<Stack
						spacing="2"
						textAlign={["start"]}
						display={["none", "flex"]}
						ml="50px"
					>
						<Heading as="h4" size="xs" mb="2">
							Resources
						</Heading>
						{sitemap.map(({ title, href }) => {
							return (
								<NextLink key={href + title} href={href} passHref>
									<Link fontSize="sm">{title}</Link>
								</NextLink>
							);
						})}
					</Stack>

					<Stack
						spacing="2"
						textAlign={["start"]}
						display={["none", "flex"]}
						ml="50px"
					>
						<Heading as="h4" size="xs" mb="2">
							Sitemap
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
				<Flex width="100%">
					<Text as="span" color="gray.500">
						© Demtrips 2021
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
