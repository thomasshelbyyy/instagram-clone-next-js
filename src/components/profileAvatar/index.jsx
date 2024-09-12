"use client";

import Image from "next/image";
import noProfile from "@/assets/profile/no-profile.png";
import { useEffect, useState } from "react";
import Modal from "../core/modal";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const ProfileAvatar = ({
	hasNewStory,
	profilePictureUrl,
	isLoggedInUser,
	userId,
}) => {
	const router = useRouter();
	const [modalActive, setModalActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const imageSchema = yup.object().shape({
		file: yup
			.mixed()
			.test("fileType", "Only image files are allowed", (file) => {
				return file && ["image/jpeg", "image/png"].includes(file.type);
			}),
	});

	const handleModalToggle = (e) => {
		e.stopPropagation();
		if (isLoggedInUser && e.key === "Escape") {
			setModalActive(false);
		}
		if (isLoggedInUser) {
			setModalActive((prev) => !prev);
		}
	};

	const handleUpload = async (e) => {
		const file = e.target.files[0];
		setIsLoading(true);

		try {
			await imageSchema.validate({ file });
			setErrorMessage("");
			const formData = new FormData();
			formData.append("userId", userId);
			formData.append("file", file);
			const res = await fetch("/api/profile/change-profile-picture", {
				method: "POST",
				body: formData,
			});

			const result = await res.json();
			if (result.status === 200) {
				setModalActive(false);
				router.refresh();
			} else {
				alert("Failed to update profile picture");
			}
		} catch (error) {
			setErrorMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleRemove = async () => {
		setIsLoading(true);

		try {
			const res = await fetch("/api/profile/remove-profile-picture", {
				method: "PUT",
				body: JSON.stringify({ userId }),
				cache: "no-store",
			});

			const result = await res.json();

			if (result.status === 200) {
				setModalActive(false);
				router.refresh();
			} else {
				alert("failed to remove profile pciter");
			}
		} catch (error) {
			console.log(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<button
				onClick={handleModalToggle}
				className="flex flex-col items-center w-1/5"
			>
				<div
					className={`w-full md:w[70%] flex items-center justify-center rounded-full p-[3px] ${
						hasNewStory
							? "bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500"
							: "bg-gray-500"
					}`}
				>
					<Image
						width={100}
						height={100}
						src={profilePictureUrl || noProfile}
						className="w-full aspect-square rounded-full border-2 border-black"
						alt="profile avatar"
						priority={false}
					/>
				</div>
			</button>
			{modalActive && (
				<Modal>
					<div className="w-96 h-auto text-center bg-gray-900 rounded-lg flex flex-col font-medium">
						<div className="py-4 border-b border-gray-600 w-full text-xl">
							Change Profile Photo
						</div>
						<form onSubmit={handleUpload} className="w-full">
							<label className="py-2 border-b border-gray-600 w-full text-blue-500 cursor-pointer">
								Upload Photo
								<input
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleUpload}
									disabled={isLoading}
								/>
							</label>
						</form>
						<button
							onClick={handleRemove}
							disabled={isLoading}
							className="py-2 border-b border-gray-600 w-full text-red-500"
						>
							Remove Current Photo
						</button>
						<button onClick={handleModalToggle} className="py-2 w-full">
							Cancel
						</button>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ProfileAvatar;
