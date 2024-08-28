"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
	const router = useRouter();
	const modalRef = useRef(null);

	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape") {
				router.back();
			}
		};

		document.addEventListener("keyup", handleEscape);
		return () => document.removeEventListener("keyup", handleEscape);
	}, [router]);

	const handleClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			router.back();
		}
	};
	return (
		<div
			className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/80 z-[99]  overflow-y-hidden"
			onClick={handleClick}
		>
			<div
				ref={modalRef}
				className="flex justify-center items-center w-full h-full py-8 md:py-0 "
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
