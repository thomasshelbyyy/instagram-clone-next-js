"use client";

import { getTime } from "@/lib/firebase/service";
import Avatar from "../core/avatar";
import { HeartIcon as HeartSolid } from "@heroicons/react/16/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "@/context/userContext";
import CommentLikesModal from "../core/commentLikesModal";

const Comment = ({
	comment,
	createdAt,
	profilePictureUrl,
	userId,
	username,
	likesCount,
	likes,
	postId,
	commentId,
}) => {
	const time = getTime(createdAt);
	const { loggedInUser } = useUser();

	const [isLiked, setIsLiked] = useState(
		likes.some((like) => like.username === loggedInUser.username)
	);
	const [likesCountState, setLikesCountState] = useState(likesCount);
	const [likeModalActive, setLikeModalActive] = useState(false);

	const handleLike = async () => {
		const currentLikeState = isLiked;
		const currentLikesCount = likesCountState;

		setIsLiked(!isLiked);
		setLikesCountState((prev) => (isLiked ? prev - 1 : prev + 1));
		try {
			const res = await fetch("/api/post/comment/like", {
				method: "POST",
				body: JSON.stringify({
					username: loggedInUser.username,
					userId: loggedInUser.id,
					fullname: loggedInUser.fullname,
					profilePictureUrl: loggedInUser.profilePictureUrl,
					postId,
					commentId,
				}),
			});
		} catch (error) {
			setIsLiked(currentLikeState);
			setLikesCountState(currentLikesCount);
		}
	};

	return (
		<>
			<div className="flex items-start pb-3">
				<Avatar profilePictureUrl="null" />
				<div className="pl-3 pr-4 flex-1">
					<div className="flex-1 text-sm">
						<div>
							<span className="pr-2">
								<Link href={`/${username}`} className="font-semibold">
									{username}
								</Link>
							</span>
							{comment}
						</div>
					</div>

					<div className="flex gap-2 text-xs pt-1">
						<span>{time}</span>
						{likesCountState > 0 && (
							<button
								onClick={() => setLikeModalActive(true)}
								className="font-medium"
							>
								{likesCountState} {likesCountState === 1 ? "like" : "likes"}
							</button>
						)}
						<button>reply</button>
					</div>
				</div>

				<button onClick={handleLike} className="">
					{isLiked ? (
						<HeartSolid className="w-3 h-3 text-red-500" />
					) : (
						<HeartOutline className="w-3 h-3 text-white" />
					)}
				</button>
			</div>

			{likeModalActive && (
				<CommentLikesModal
					commentId={commentId}
					postId={postId}
					setVisible={setLikeModalActive}
				/>
			)}
		</>
	);
};

export default Comment;
