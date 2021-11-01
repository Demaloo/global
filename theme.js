import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
	styles: {
		global: {
			".blog": {
				fontSize: "16px",
				h1: {
					my: 6,
					lineHeight: 1,
					fontWeight: "bold",
					fontSize: "4xl",
				},
				h2: {
					my: 6,
					lineHeight: 1,
					fontWeight: "bold",
					fontSize: "3xl",
				},
				h3: {
					my: 6,
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "2xl",
				},
				h4: {
					my: 6,
					lineHeight: 1.2,
					fontWeight: "bold",
					fontSize: "xl",
				},
				p: {
					lineHeight: "taller",
					mb: 8,
				},
				a: {
					color: "blue.500",
					textDecoration: "underline",
					_hover: {
						color: "blue.400",
					},
				},
				ol: {
					my: 6,
					ml: "1.25rem",
					"& > * + *": {
						mt: 4,
					},
				},
				ul: {
					my: 6,
					ml: "1.25rem",
					"& > * + *": {
						mt: 4,
					},
				},
			},
		},
	},
	fonts: {
		body: "Poppins, sans-serif",
		heading: "Poppins, sans-serif",
	},
	colors: {},
	components: {
		Link: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
		Button: {
			baseStyle: {
				_focus: {
					boxShadow: "none",
				},
			},
		},
	},
});

export default customTheme;
