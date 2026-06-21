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
    title: "Abdullah Naeem | Portfolio",

    description:
		"Muhammad Abdullah Naeem - Full-stack developer experienced in React, Next.js, Express, and Django/DRF, building scalable web applications end-to-end.",

    author: "Muhammad Abdullah Naeem",
    siteUrl: "https://www.abdullahnaeem.dev",
    applicationName: "Abdullah Naeem Portfolio",

    keywords: [
		"abdullah naeem",
		"muhammad abdullah naeem",
		"full stack developer",
		"react developer",
		"next.js developer",
		"django developer",
		"portfolio",
	],

    openGraph: {
		type: "website",
		url: "https://www.abdullahnaeem.dev",
		title: "Abdullah Naeem | Portfolio",
		site_name: "Abdullah Naeem | Portfolio",
		description: "Muhammad Abdullah Naeem - Full-stack developer portfolio.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Abdullah Naeem Portfolio",
			},
		],
		site_name: "Abdullah Naeem | Portfolio",
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
