import { Box, Container, Flex, Link, Button } from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { useAtom } from "jotai";
import { sitemap } from "lib/config";
import { HEADER_HEIGHT } from "lib/constants";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { requestAtom } from "state";
import Request from "./request";

const Header = ({ isTransparent = false }) => {
	const [y, setY] = useState(0);
	const { scrollY } = useViewportScroll();

	const [isRequestModalOpen, setRequestModalOpen] = useAtom(requestAtom);

	useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);

	const isTrans = isTransparent && y === 0;

	return (
		<Box
			as="header"
			position={[isTrans ? "absolute" : "fixed"]}
			top="0"
			zIndex="1"
			width="100%"
			backgroundColor={isTrans ? "transparent" : "white"}
			height={HEADER_HEIGHT}
			transition="background-color 0.4s"
			boxShadow={
				isTrans
					? "none"
					: "rgb(255 255 255) 0px -1px 0px, rgb(0 0 0 / 5%) 0px 3px 6px 0px, rgb(0 0 0 / 10%) 0px 0.5px 0px 0px"
			}
		>
			<Container maxW="container.xl" height="100%">
				<Flex
					height="100%"
					alignItems="center"
					justifyContent="space-between"
				>
					<NextLink href={"/"} passHref>
						<Link
							color={isTrans ? "white" : "gray.700"}
							fontWeight="bold"
							fontSize="xl"
							_hover={{
								textDecoration: "none",
							}}
						>
							Demtrips.
						</Link>
					</NextLink>

					{isTransparent && y > 400 && (
						<Button
							size="sm"
							transition="all 0.5s"
							onClick={() => {
								setRequestModalOpen(true);
							}}
						>
							Create Trip
						</Button>
					)}

					{sitemap
						.filter((el) => el.href !== "/")
						.map(({ title, href }, idx) => (
							<HeaderLink key={idx} href={href} isTrans={isTrans}>
								{title}
							</HeaderLink>
						))}

					<Request
						isOpen={isRequestModalOpen}
						onClose={() => {
							setRequestModalOpen(false);
						}}
					/>
				</Flex>
			</Container>
		</Box>
	);
};

const HeaderLink = ({ href, isTrans, children }) => {
	return (
		<NextLink href={href} passHref>
			<Link
				color={isTrans ? "white" : "gray.700"}
				fontWeight="semibold"
				_hover={{
					textDecoration: "none",
				}}
			>
				{children}
			</Link>
		</NextLink>
	);
};

export default Header;
