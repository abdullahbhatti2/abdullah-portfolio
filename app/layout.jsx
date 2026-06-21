import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import WhatsApp from "@/components/WhatsApp";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Abdullah | Portfolio",

    description:
		"Abdullah - Full-stack developer experienced in building modern web applications.",

    author: "Abdullah",
    siteUrl: "https://alvalens.my.id",
    applicationName: "Abdullah Portfolio",

    keywords: [
		"abdullah",
		"full stack developer",
		"react developer",
		"next.js developer",
		"portfolio",
	],

    openGraph: {
		type: "website",
		url: "https://alvalens.my.id",
		title: "Abdullah | Portfolio",
		site_name: "Abdullah | Portfolio",
		description: "Abdullah - Full-stack developer portfolio.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Abdullah Portfolio",
			},
		],
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<WhatsApp />
				<Analytics />
			</body>
		</html>
	);
}
