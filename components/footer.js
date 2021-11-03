import {
	Box,
	Container,
	Stack,
	Text,
	Link,
	Heading,
	Flex,
	Icon,
} from "@chakra-ui/react";
import { sitemap } from "lib/config";
import NextLink from "next/link";
import Logo from "./logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<Box
			as="footer"
			py={["50px", "100px"]}
			border="1px solid"
			borderColor="gray.300"
		>
			<Container maxW="container.xl">
				<Stack
					direction={["column", null, "row"]}
					spacing="10"
					mb="10"
					justifyContent={["normal", null, "space-between"]}
				>
					<Stack spacing="6">
						<Logo />
						<Text maxW="300px">
							Weve counted billions of page views for thousands of
							customers, all without ever compromising anyone’s privacy.
						</Text>
					</Stack>

					<Stack spacing="2" textAlign={["start"]}>
						<Heading as="h4" size="sm" mb="2">
							FOR TRAVELERS
						</Heading>
						<NextLink href="/" passHref>
							<Link>COVID restrictions</Link>
						</NextLink>
						<NextLink href="/" passHref>
							<Link>VISA issues</Link>
						</NextLink>
					</Stack>

					{/* Company */}
					<Stack spacing="2" textAlign={["start"]}>
						<Heading as="h4" size="sm" mb="2">
							SITEMAP
						</Heading>
						{sitemap.map(({ title, href }) => {
							return (
								<NextLink key={href + title} href={href} passHref>
									<Link>{title}</Link>
								</NextLink>
							);
						})}
					</Stack>

					{/* Legal */}
					<Stack spacing="2" textAlign="start">
						<Heading as="h4" size="sm" mb="2">
							ABOUT
						</Heading>
						<NextLink href="/" passHref>
							<Link>Privacy</Link>
						</NextLink>
						<NextLink href="/" passHref>
							<Link>{`Terms & Conditions`}</Link>
						</NextLink>
					</Stack>
				</Stack>

				{/* Social */}
				<Stack direction="row" spacing="4" mb="6" alignItems="center">
					<Link>
						<Icon as={FaFacebook} boxSize={6} color="facebook.500" />
					</Link>
					<Link>
						<Icon as={FaInstagram} boxSize={6} color="red.500" />
					</Link>
					<Link>
						<Icon as={FaTwitter} boxSize={6} color="telegram.400" />
					</Link>
				</Stack>

				<Flex>
					<Text as="span" fontSize="sm" color="gray.500">
						© Demtrips 2021
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
