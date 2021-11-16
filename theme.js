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
	colors: {
		brand: "#F06666",
		kyzyl: {
			100: "#f0bbbb",
			200: "#f0bbbb",
			300: "#f0bbbb",
			400: "#F06666",
			500: "#F06666",
			600: "#ab4141",
			700: "#ab4141",
		},
		jashyl: {
			100: "#b5f7eb",
			200: "#b5f7eb",
			300: "#b5f7eb",
			400: "#00D0AA",
			500: "#00D0AA",
			600: "#3ca391",
			700: "#3ca391",
		},
	},
	components: {
		Link: {
			baseStyle: {
				borderRadius: "lg",
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
			sizes: {
				lg: {
					fontSize: "md",
				},
			},
			defaultProps: {
				colorScheme: "kyzyl",
			},
		},
		Heading: {
			baseStyle: {
				fontWeight: "semibold",
			},
			sizes: {
				md: {
					fontSize: ["xl", null, "2xl"],
				},
				lg: {
					fontSize: ["2xl", null, "3xl"],
				},
				xl: {
					fontSize: ["3xl", null, "4xl"],
				},
				"2xl": {
					fontSize: ["4xl", null, "5xl"],
				},
				"3xl": {
					fontSize: ["5xl", null, "6xl"],
				},
				"4xl": {
					fontSize: ["6xl", null, "7xl"],
				},
			},
		},
		Input: {
			variants: {
				outline: {
					field: {
						_focus: {
							borderColor: "gray.500",
							boxShadow: "none",
						},
						_invalid: {
							borderColor: "red.300",
							boxShadow: "none",
						},
					},
				},
			},
			sizes: {
				lg: {
					field: {
						// h: 16,
						fontSize: "md",
					},
				},
			},
		},
		Textarea: {
			variants: {
				outline: {
					_focus: {
						borderColor: "gray.500",
						boxShadow: "none",
					},
				},
			},
		},
	},
	textStyles: {
		caption: {
			fontSize: "sm",
			color: "gray.500",
		},
		title: {
			fontWeight: "semibold",
			fontSize: ["sm"],
		},
	},
});

export default customTheme;
