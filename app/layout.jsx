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
    title: "Alvalens | Portofolio",

    description:
		"Alvalens - Full-stack developer experienced in building modern web applications.",

    author: "Alvalens",
    siteUrl: "https://alvalens.my.id",
    applicationName: "Alvalens Portofolio",

    keywords: [
		"alvalens",
		"full stack developer",
		"react developer",
		"next.js developer",
		"portfolio",
	],
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
