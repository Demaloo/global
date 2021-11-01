import { Box, Container, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
	return (
		<Box
			as="header"
			position="sticky"
			top="0"
			zIndex="1"
			backgroundColor="transparent"
			height="3rem"
		>
			<Container maxW="container.lg" height="100%">
				<Flex height="100%" alignItems="center">
					<NextLink href="/" passHref>
						<Link
							color="white"
							fontWeight="bold"
							fontSize="xl"
							_hover={{
								textDecoration: "none",
							}}
						>
							Demtrips.
						</Link>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
