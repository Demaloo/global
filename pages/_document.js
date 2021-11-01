import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				{process.env.NODE_ENV === "production" && (
					<script async src="https://cdn.splitbee.io/sb.js"></script>
				)}

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
