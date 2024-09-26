"use client";

import Image from "next/image";
import Avatar from "../avatar";
import {
	EllipsisHorizontalIcon,
	HeartIcon as SolidHeart,
} from "@heroicons/react/16/solid";
import {
	BookmarkIcon,
	ChatBubbleOvalLeftIcon,
	FaceSmileIcon,
	HeartIcon as OutlineHeart,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { timeAgo } from "@/lib/firebase/service";
import { useUser } from "@/context/userContext";
import { useState } from "react";
import LikesModal from "../likesModal";

const PostDetailWModal = ({
	postId,
	mediaUrl,
	caption,
	commentsCount,
	likesCount,
	profilePictureUrl,
	createdAt,
	username,
	isEdited,
	likes,
	comments,
}) => {
	const time = timeAgo(createdAt);
	const { loggedInUser } = useUser();

	const [isLiked, setIsLiked] = useState(
		likes.some((like) => like.userId === loggedInUser.id)
	);
	const [likesCountState, setLikesCountState] = useState(likesCount);
	const [likesModalActive, setLikesModalActive] = useState(false);

	const handleLike = async () => {
		const currentLikeState = isLiked;
		const currentLikesCountState = likesCountState; // Menggunakan likesCountState saat ini, bukan likesCount
		setIsLiked(!isLiked);
		setLikesCountState(
			currentLikeState ? likesCountState - 1 : likesCountState + 1
		); // Menggunakan likesCountState di sini

		try {
			const formData = {
				postId,
				userId: loggedInUser.id,
				username: loggedInUser.username,
				profilePictureUrl: loggedInUser.profilePictureUrl,
			};
			const res = await fetch("/api/post/like", {
				method: "POST",
				body: JSON.stringify(formData),
			});

			const result = await res.json();

			if (result.status !== 200) {
				setIsLiked(currentLikeState);
				setLikesCountState(currentLikesCountState); // Mengembalikan state jika terjadi error
			}
		} catch (error) {
			console.log(error);
			setIsLiked(currentLikeState); // Mengembalikan state jika error
			setLikesCountState(currentLikesCountState); // Mengembalikan jumlah like jika error
		}
	};

	return (
		<>
			<div className="flex flex-col md:flex-row w-3/4  border border-gray-700 rounded-md h-auto md:h-[600px]">
				<div className="w-full md:w-7/12 h-full bg-gray-600 rounded-l-md ">
					<div className="px-3 py-1 flex justify-between border-b border-gray-500 md:hidden">
						<div className="flex items-center gap-1">
							<Avatar
								hasNewStory={true}
								profilePictureUrl={profilePictureUrl}
							/>
							<Link href={`/${username}`} className="font-semibold ">
								{username}
							</Link>
							<span>&bull;</span>
							<span className="Following"></span>
						</div>

						<button>
							<EllipsisHorizontalIcon className="w-6 h-6" />
						</button>
					</div>
					<Image
						alt=""
						src={mediaUrl}
						width={100}
						height={100}
						className="w-full md:w-fit h-auto md:h-full"
					/>
				</div>
				<div className="w-full md:w-5/12 h-full bg-zinc-950 rounded-r-md flex flex-col text-xs">
					<div className="px-3 py-1 hidden md:flex justify-between border-b border-gray-500">
						<div className="flex items-center gap-1">
							<Avatar
								hasNewStory={true}
								profilePictureUrl={profilePictureUrl}
							/>
							<Link href={`/${username}`} className="font-semibold ">
								{username}
							</Link>
							<span>&bull;</span>
							<span className="Following"></span>
						</div>

						<button>
							<EllipsisHorizontalIcon className="w-6 h-6" />
						</button>
					</div>

					<div className="hidden md:block flex-1 overflow-y-auto px-3 py-2">
						<div className="flex gap-2">
							<div className="h-10 w-10">
								<Avatar profilePictureUrl={profilePictureUrl} />
							</div>
							<div className="flex-1 text-sm font-medium">
								<Link href={`/${username}`} className="font-semibold">
									{username}
								</Link>
								<div>{caption}</div>
							</div>
						</div>
					</div>

					<div className="px-3 py-2 border-t border-gray-500">
						<div className="flex justify-between">
							<div className="flex gap-3">
								<button onClick={handleLike}>
									{isLiked ? (
										<SolidHeart className="w-6 h-6 text-red-500" />
									) : (
										<OutlineHeart className="w-6 h-6" />
									)}
								</button>
								<button>
									<ChatBubbleOvalLeftIcon className="w-6 h-6" />
								</button>
								<button>
									<PaperAirplaneIcon className="w-6 h-6 transform -rotate-45" />
								</button>
							</div>

							<button>
								<BookmarkIcon className="w-6 h-6" />
							</button>
						</div>

						<button
							onClick={() => setLikesModalActive(true)}
							className="font-semibold pt-3 pb-1"
						>
							{likesCountState} likes
						</button>
						<div className=" text-gray-400">{time}</div>

						<div className="flex pt-8 gap-2">
							<Avatar profilePictureUrl={profilePictureUrl} />
							<input
								type="text"
								className="flex-1 focus:outline-none bg-transparent text-sm"
								placeholder="Add a comment..."
							/>
							<button>
								<FaceSmileIcon className="w-6 h-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
			{likesModalActive && (
				<LikesModal postId={postId} setVisible={setLikesModalActive} />
			)}
		</>
	);
};

export default PostDetailWModal;
