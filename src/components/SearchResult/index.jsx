"user client";

import Image from "next/image";
import noProfile from "@/assets/profile/no-profile.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchResult = ({
	profilePictureUrl,
	username,
	fullname,
	isFollowing,
	id,
	loggedInUser,
}) => {
	const router = useRouter();
	const [isFollowingTemp, setIsFollowingTemp] = useState(isFollowing);
	const [isLoading, setIsLoading] = useState(false);

	const handleFollow = async () => {
		const previousFollowingStatus = isFollowingTemp;
		setIsFollowingTemp(!isFollowingTemp);
		setIsLoading(true);
		try {
			let res;

			if (isFollowing) {
				res = await fetch("/api/user/unfollow", {
					method: "POST",
					body: JSON.stringify({
						userId: loggedInUser.id,
						userToUnfollowId: id,
					}),
				});
			} else {
				res = await fetch("/api/user/follow", {
					method: "POST",
					body: JSON.stringify({
						userData: {
							userId: loggedInUser.id,
							profilePictureUrl: loggedInUser.profilePictureUrl,
							username: loggedInUser.username,
						},
						userToFollow: {
							userId: id,
							profilePictureUrl: profilePictureUrl,
							username: username,
							fullname: fullname || "",
						},
					}),
				});
			}

			const result = await res.json();
			if (result.status === 200) {
				router.refresh();
			} else {
				console.log(result.message);
			}
		} catch (error) {
			console.log(error);
			setIsFollowingTemp(previousFollowingStatus);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex justify-between px-5 py-2 items-center">
			<div className="flex gap-2">
				<Image
					src={profilePictureUrl || noProfile}
					width={100}
					height={100}
					alt="user profile"
					className="w-10 h-10 rounded-full"
				/>
				<div className="text-sm">
					<Link href={`/${username}`} className="font-semibold">
						{username}
					</Link>
					<div className="text-gray-300">{fullname}</div>
				</div>
			</div>

			<button
				onClick={handleFollow}
				disabled={isLoading}
				className={`px-2 py-1 h-fit rounded-md  ${
					isFollowing ? "bg-gray-500" : "bg-blue-500"
				} font-semibold text-sm`}
			>
				{isFollowing ? "Following" : "Follow"}
			</button>
		</div>
	);
};

export default SearchResult;
