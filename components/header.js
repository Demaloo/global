import { Box, Container, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./logo";

const Header = () => {
	return (
		<Box as="header">
			<Container maxW="container.lg">
				<Flex py="4">
					<NextLink href="/">
						<a>
							<Logo />
						</a>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
