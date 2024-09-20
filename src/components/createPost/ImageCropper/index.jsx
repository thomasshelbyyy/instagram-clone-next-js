"use client";

import { useState } from "react";
import Cropper from "react-easy-crop";
import { brookeCagle } from "@/assets/profile/images";
import { getCroppedImg } from "@/utils/canvasUtils";

const ImageCropper = ({ image, setCroppedImage, setCurrentStep }) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const [aspectRatio, setAspectRatio] = useState(1 / 1);

	const onCropComplete = (croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	};

	const handleZoomChange = (e) => {
		setZoom(e.target.value);
	};

	const handleRotationChange = (e) => {
		setRotation(e.target.value);
	};

	const handleCropImage = async () => {
		try {
			const croppedImage = await getCroppedImg(
				image,
				croppedAreaPixels,
				rotation
			);
			setCroppedImage(croppedImage);
			setCurrentStep(3);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className=" flex-1 relative w-96">
				<Cropper
					image={image}
					crop={crop}
					zoom={zoom}
					rotation={rotation}
					aspect={aspectRatio}
					onCropChange={setCrop}
					onRotationChange={setRotation}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
					className="absolute w-full h-full"
				/>
			</div>
			<div className="px-4 py-3 flex gap-3">
				<button
					onClick={() => setAspectRatio(1 / 1)}
					className={`w-12 aspect[1/1] rounded-full p-3`}
				>
					<div className="w-8 h-8 rounded-md border border-white"></div>
				</button>
				<button
					onClick={() => setAspectRatio(4 / 5)}
					className={`w-12 h-12 rounded-full p-3`}
				>
					<div className="w-8 aspect-[4/5] rounded-md border border-white"></div>
				</button>
				<button
					onClick={() => setAspectRatio(16 / 9)}
					className={`w-12 h-12 rounded-full p-3`}
				>
					<div className="w-8 aspect-[16/9] rounded-md border border-white"></div>
				</button>
			</div>
			<div className="flex px-4 pb-2 gap-3">
				<div className="">Zoom</div>
				<input
					type="range"
					min={1}
					max={3}
					step={0.01}
					value={zoom}
					onChange={handleZoomChange}
					className="flex-1"
				/>
			</div>
			<div className="flex px-4 pb-3 gap-3">
				<div className="">Rotation</div>
				<input
					type="range"
					min={0}
					max={360}
					step={1}
					value={rotation}
					onChange={handleRotationChange}
					className="flex-1"
				/>
			</div>

			<div className="px-4 py-3 flex justify-between border-t border-white bg-gray-800 rounded-b-lg">
				<button
					className="font-semibold text-gray-300"
					onClick={() => setCurrentStep(1)}
				>
					Previous
				</button>
				<button
					className="font-semibold text-blue-500"
					onClick={handleCropImage}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default ImageCropper;
