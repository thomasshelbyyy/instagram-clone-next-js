"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import ImageSelector from "./ImageSelector";
import ImageCropper from "./ImageCropper";
import CreateCaption from "./createCaption";
import { FadeLoader } from "react-spinners";

const CreatePost = ({ setVisible, loggedInUser }) => {
	const [currentStep, setCurrentStep] = useState(1);
	const [image, setImage] = useState(null);
	const [croppedImage, setCroppedImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

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

				<div className="min-h-[450px] black rounded-lg bg-gray-900 text-white flex flex-col relative">
					<span className="flex justify-center font-semibold py-2">
						Create new post
					</span>
					<div className="w-full h-[1px] bg-gray-700"></div>

					{!image && (
						<ImageSelector
							setImage={setImage}
							setCurrentStep={setCurrentStep}
						/>
					)}

					{image && currentStep === 2 && (
						<ImageCropper
							image={image}
							setCroppedImage={setCroppedImage}
							setCurrentStep={setCurrentStep}
						/>
					)}
					{image && currentStep === 3 && (
						<CreateCaption
							image={croppedImage}
							loggedInUser={loggedInUser}
							setIsLoading={setIsLoading}
							isLoading={isLoading}
							setVisible={setVisible}
						/>
					)}

					{isLoading && (
						<div className="absolute w-full h-full flex justify-center items-center bg-black/40">
							<FadeLoader size={80} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
