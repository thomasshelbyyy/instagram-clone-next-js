"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import illustration from "../../assets/picture-illustration.svg";
import { useEffect } from "react";
import Image from "next/image";

const CreatePost = ({ setVisible }) => {
	useEffect(() => {
		const handleKeyUp = (event) => {
			if (event.key === "Escape") {
				setVisible(false);
			}
		};
		document.addEventListener("keyup", handleKeyUp);

		return () => document.removeEventListener("keyup", handleKeyUp);
	}, [setVisible]);
	return (
		<div className="fixed w-screen h-screen top-0 left-0 bg-black/40 z-50 pt-8 md:pt-0">
			<div className="w-full h-full relative flex justify-center items-center">
				<button
					onClick={() => setVisible(false)}
					className="absolute top-5 right-5 z-50"
				>
					<XMarkIcon className="w-7 h-7 text-white" />
				</button>

				<div className="w-96 h-[450px] black rounded-lg bg-gray-900 text-white flex flex-col">
					<span className="flex justify-center font-semibold py-2">
						Create new post
					</span>
					<div className="w-full h-[1px] bg-gray-700"></div>

					<div className="flex flex-col justify-center items-center flex-1">
						<Image
							width={100}
							height={100}
							src={illustration}
							alt=""
							className="w-28 h-auto"
						/>
						<div className="text-xl pt-2">Drag photos or videos here</div>
						<button className="bg-blue-700 rounded-md font-medium px-3 py-2 text-sm mt-6">
							select from computer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
