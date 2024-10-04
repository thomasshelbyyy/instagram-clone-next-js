"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCaption = ({
	image,
	loggedInUser,
	setIsLoading,
	isLoading,
	setVisible,
}) => {
	const [caption, setCaption] = useState("");
	// const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [imageSrc, setImageSrc] = useState(URL.createObjectURL(image));
	const textareaRef = useRef(null);

	// const handleEmojiClick = (emoji) => {
	// 	setCaption(caption + emoji.native);
	// };
	useEffect(() => {
		setImageSrc(URL.createObjectURL(image));
	}, [image]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (caption.length === 0) return;
		setIsLoading(true);
		try {
			const formData = new FormData();
			formData.append("username", loggedInUser.username);
			formData.append("profilePictureUrl", loggedInUser.profilePictureUrl);
			formData.append("image", image);
			formData.append("caption", caption);
			formData.append("userId", loggedInUser.id);

			const response = await fetch("/api/post/add", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (result.status === 200) {
				toast.success("Post success", {
					position: "top-right",
				});
				setVisible(false);
			} else {
				toast.error("failed to post");
				console.log("upload post gagal");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleInput = () => {
		// Set height to auto to reset any previous height adjustments
		textareaRef.current.style.height = "auto";
		// Adjust height to match the scroll height (content height)
		textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
	};

	useEffect(() => {
		// Trigger resize when component mounts or content changes
		const textarea = textareaRef.current;
		textarea.style.height = "auto";
		textarea.style.height = `${textarea.scrollHeight}px`;
	}, [caption]);
	return (
		<form onSubmit={handleSubmit}>
			<div className=" flex flex-col md:flex-row">
				<Image
					src={imageSrc}
					alt="user image"
					width={100}
					height={100}
					className="w-96 h-fit hidden md:block"
				/>
				<div className="w-96 p-4">
					<textarea
						disabled={isLoading}
						ref={textareaRef}
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
						onInput={handleInput}
						className="bg-transparent w-full focus:outline-none border border-gray-200 rounded-md resize-none overflow-hidden p-4"
						placeholder="write caption..."
					></textarea>
					{/* <button
						type="button"
						className="mt-4 text-xl"
						onClick={() => setShowEmojiPicker(!showEmojiPicker)}
					>
						😀
					</button> */}
					{/* {showEmojiPicker && (
						<Picker
							data={data}
							onEmojiSelect={handleEmojiClick}
							previewPosition="none"
							searchPosition="none"
						/>
					)} */}
				</div>
			</div>
			<div className="px-4 py-3 bg-gray-800 border-t border-white rounded-b-lg flex justify-between">
				<button type="button" className="font-semibold text-gray-500">
					Previous
				</button>
				<button
					type="submit"
					disabled={isLoading}
					className="font-semibold text-blue-500"
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default CreateCaption;
