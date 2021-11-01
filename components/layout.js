import { Box } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "lib/constants";

function Layout({ children }) {
	return (
		<Box as="main" marginY={`-${HEADER_HEIGHT}`}>
			{children}
		</Box>
	);
}

export default Layout;
