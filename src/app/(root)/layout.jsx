"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/navigation";
import BottomMenu from "@/components/bottomMenu";

export default function MainLayout({ children }) {
	const pathname = usePathname();
	return (
		<>
			<Navigation />
			<main
				className={`h-screen md:pl-24 ${
					pathname === "/message" ? "lg:pl-24" : "lg:pl-64"
				}  bg-black text-white w-full md:pt-0`}
			>
				{children}
			</main>
			<BottomMenu />
		</>
	);
}
