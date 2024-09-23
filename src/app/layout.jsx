import ToastProvider from "@/lib/react-toastify/ToastProvider";
import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<ToastProvider>{children}</ToastProvider>
			</body>
		</html>
	);
}
