import { Box, Container, Flex, Link } from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { HEADER_HEIGHT } from "lib/constants";
import NextLink from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
	const [y, setY] = useState(0);
	const { scrollY } = useViewportScroll();

	useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);

	return (
		<Box
			as="header"
			position="sticky"
			top="0"
			zIndex="1"
			backgroundColor={y > 0 ? "white" : "transparent"}
			height={HEADER_HEIGHT}
			transition="background-color 0.4s"
		>
			<Container maxW="container.xl" height="100%">
				<Flex height="100%" alignItems="center">
					<NextLink href="/" passHref>
						<Link
							color={y > 0 ? "gray.700" : "white"}
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
