import { Box } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "lib/constants";

function Layout({ children }) {
	return (
		<Box as="main" marginT={`-${HEADER_HEIGHT}`}>
			{children}
		</Box>
	);
}

export default Layout;
