"use client";

import { CogIcon } from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	EllipsisHorizontalIcon,
	UserPlusIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Modal from "../core/modal";
import { useRouter } from "next/navigation";
import FollowingComponent from "../followingComponent";

const ProfileCTA = ({ user, loggedInUser }) => {
	const router = useRouter();
	const [settingActive, setSettingActive] = useState(false);
	const [isFollowing, setIsFollowing] = useState(
		user.followers.find((obj) => obj.username === loggedInUser.username)
	);
	const [followersCount, setFollowersCount] = useState(user.followersCount);
	const [isLoading, setIsLoading] = useState(false);
	const [isFollowingModalActive, setIsFollowingModalActive] = useState(false);
	const [activeTab, setActiveTab] = useState("following");

	const handleFollowingClick = (selectedTab) => {
		setActiveTab(selectedTab);
		setIsFollowingModalActive(true);
	};

	const handleFollow = async () => {
		const previousFollowingStatus = isFollowing;
		setIsFollowing(!isFollowing);
		setFollowersCount((prev) => (isFollowing ? prev - 1 : prev + 1));
		setIsLoading(true);
		try {
			let res;

			if (isFollowing) {
				res = await fetch("/api/user/unfollow", {
					method: "POST",
					body: JSON.stringify({
						userId: loggedInUser.id,
						userToUnfollowId: user.id,
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
							userId: user.id,
							profilePictureUrl: user.profilePictureUrl,
							username: user.username,
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
			setIsFollowing(previousFollowingStatus);
			setFollowersCount(user.followersCount);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div>
			<div className="flex flex-col lg:flex-row lg:items-center pb-3 gap-3">
				<div className="flex justify-between items-center lg:gap-4">
					<p className="text-lg lg:text-xl font-semibold pr-4">
						{user.username}
					</p>
					{loggedInUser.username === user.username ? (
						<button
							onClick={() => setSettingActive(true)}
							className="cursor-pointer lg:hidden"
						>
							<CogIcon className="w-5 h-5" />
						</button>
					) : (
						<button className="cursor-pointer lg:hidden">
							<EllipsisHorizontalIcon className="w-5 h-5" />
						</button>
					)}
				</div>

				{loggedInUser.username === user.username ? (
					<div className="flex gap-3 text-xs md:text-sm lg:gap-4 lg:ml-auto">
						<button className="flex gap-1 items-center px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
							Edit Profile
						</button>

						<button className="px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
							View Archive
						</button>

						<button
							onClick={() => setSettingActive(true)}
							className="cursor-pointer hidden lg:block"
						>
							<CogIcon className="w-5 h-5" />
						</button>
					</div>
				) : (
					<div className="flex gap-3 text-xs md:text-sm lg:gap-4 lg:ml-auto">
						<button
							onClick={handleFollow}
							disabled={isLoading}
							className={`flex gap-1 items-center py-1 cursor-pointer rounded-md ${
								isFollowing ? "bg-gray-600 px-3" : "bg-blue-500 px-6"
							}`}
						>
							{isFollowing ? "Following" : "Follow"}
							{/* <ChevronDownIcon className="w-5 h-5" /> */}
						</button>

						<button className="px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
							Message
						</button>

						<button className="px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
							<UserPlusIcon className="w-5 h-5" />
						</button>

						<button className="cursor-pointer hidden lg:block">
							<EllipsisHorizontalIcon className="w-5 h-5" />
						</button>
					</div>
				)}
			</div>

			<div className="hidden md:flex gap-5">
				<span>
					<span className="font-semibold">1,234 </span> Posts
				</span>
				<button onClick={() => handleFollowingClick("followers")}>
					<span className="font-semibold">{followersCount} </span> followers
				</button>
				<button onClick={() => handleFollowingClick("following")}>
					<span className="font-semibold">{user.followingCount} </span>{" "}
					following
				</button>
			</div>

			{settingActive && (
				<Modal>
					<div className="w-96 h-auto text-center bg-gray-900 rounded-lg flex flex-col font-medium">
						<button className="py-2 border-b border-gray-600 w-full">
							Apps and Websites
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							QR Code
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Notifications
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Settings and Privacy
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Meta Verified
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Supervision
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Login Activity
						</button>
						<button className="py-2 border-b border-gray-600 w-full">
							Embed
						</button>
						<button
							onClick={() => signOut()}
							className="py-2 border-b border-gray-600 w-full"
						>
							Logout
						</button>
						<button
							onClick={() => setSettingActive(false)}
							className="py-2 w-full"
						>
							Cancel
						</button>
					</div>
				</Modal>
			)}

			{isFollowingModalActive && (
				<Modal>
					<FollowingComponent
						setIsModalActive={setIsFollowingModalActive}
						selectedTab={activeTab}
						setSelectedTab={setActiveTab}
						followers={user.followers}
						followings={user.following}
						loggedInUser={loggedInUser}
					/>
				</Modal>
			)}
		</div>
	);
};

export default ProfileCTA;
