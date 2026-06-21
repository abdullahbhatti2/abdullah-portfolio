"use client";
import { motion } from "framer-motion";

const WhatsApp = () => {
	return (
		<motion.a
			href="https://wa.me/923134568894"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 bg-green-500 w-14 h-14 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 1, type: "spring", stiffness: 200 }}>
			<svg
				viewBox="0 0 32 32"
				className="w-7 h-7 fill-white"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.058 9.378L1.054 31.29l6.118-1.978A15.907 15.907 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.336 22.608c-.39 1.096-1.932 2.006-3.162 2.27-.84.18-1.936.322-5.618-1.206-4.716-1.956-7.748-6.74-7.98-7.052-.226-.31-1.896-2.524-1.896-4.814s1.2-3.414 1.628-3.88c.39-.428.924-.56 1.228-.56.31 0 .62.002.89.016.286.014.668-.108 1.042.794.39.942 1.33 3.244 1.446 3.478.116.234.194.506.038.816-.156.312-.29.506-.582.782-.292.276-.584.49-.878.786-.266.27-.55.56-.234.994.316.434 1.404 2.316 3.018 3.754 2.076 1.85 3.76 2.424 4.33 2.696.436.206.926.154 1.212-.24.296-.408.668-1.076.936-1.448.256-.352.58-.396.964-.268.39.126 2.462 1.162 2.882 1.374.42.212.7.318.806.496.106.174.106 1.016-.284 2.112z" />
			</svg>
		</motion.a>
	);
};

export default WhatsApp;
