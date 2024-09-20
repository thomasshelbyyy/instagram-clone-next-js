"use client";

import Image from "next/image";
import illustration from "@/assets/picture-illustration.svg";

const ImageSelector = ({ setImage, setCurrentStep }) => {
	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setImage(imageUrl);
			setCurrentStep(2);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center flex-1 w-96">
			<Image
				width={100}
				height={100}
				src={illustration}
				alt=""
				className="w-28 h-auto"
			/>
			<div className="text-xl pt-2">Drag photos or videos here</div>
			<label className="bg-blue-700 rounded-md font-medium px-3 py-2 text-sm mt-6 cursor-pointer">
				Select from computer
				<input
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					className="hidden"
				/>
			</label>
		</div>
	);
};

export default ImageSelector;
