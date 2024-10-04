"use client";

import { useEffect, useState } from "react";
import Modal from "../modal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FadeLoader } from "react-spinners";
import SearchResult from "@/components/SearchResult";
import { useUser } from "@/context/userContext";

const CommentLikesModal = ({ commentId, postId, setVisible }) => {
	const { loggedInUser } = useUser();
	const [likes, setLikes] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(
					`/api/post/comment/get-likes?post-id=${postId}&comment-id=${commentId}`,
					{
						cache: "no-store",
					}
				);

				const result = await res.json();
				console.log(result);
				setLikes(result.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [commentId]);
	return (
		<Modal>
			<div className="w-96 bg-gray-700 rounded-lg">
				<div className="flex justify-between px-4 py-3 border-b border-gray-200">
					<div className="w-10"></div>
					<div className="text-lg font-semibold">Likes</div>
					<button onClick={() => setVisible(false)}>
						<XMarkIcon className="w-6 h-6 text-white" />
					</button>
				</div>

				<div className="w-full h-96 overflow-y-auto">
					{isLoading ? (
						<div className="w-full h-full flex justify-center items-center">
							<FadeLoader size={80} color="white" />
						</div>
					) : (
						likes &&
						likes.map((like) => (
							<SearchResult
								fullname={""}
								id={like.userId}
								isFollowing={like.userId === loggedInUser.id}
								loggedInUser={loggedInUser}
								profilePictureUrl={like.profilePictureUrl}
								username={like.username}
								key={like.userId}
							/>
						))
					)}
				</div>
			</div>
		</Modal>
	);
};

export default CommentLikesModal;
