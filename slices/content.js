import { Box } from "@chakra-ui/react";
import { RichText } from "prismic-reactjs";

const ContentSlice = ({ slice }) => {
	return (
		<Box className="blog">
			<RichText render={slice.items[0].content} />
		</Box>
	);
};

export default ContentSlice;
