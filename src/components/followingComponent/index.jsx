"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchResult from "../SearchResult";

const FollowingComponent = ({
	setIsModalActive,
	setSelectedTab,
	selectedTab,
	followings,
	followers,
	loggedInUser,
}) => {
	console.log({ followings, followers });
	return (
		<div className="w-96 h-96 rounded-lg bg-gray-900 flex flex-col">
			<div className="flex justify-between p-4">
				<div className="w-4"></div>
				<div className="text-xl font-semibold">
					{selectedTab === "followers" ? "Followers" : "Following"}
				</div>
				<button onClick={() => setIsModalActive(false)}>
					<XMarkIcon className="text-white w-6 h-6" />
				</button>
			</div>

			<div className="flex ">
				<button
					onClick={() => setSelectedTab("followers")}
					className={`w-1/2 border-b ${
						selectedTab === "followers"
							? " border-white text-white font-medium"
							: "border-gray-500 text-gray-500"
					}`}
				>
					Followers
				</button>
				<button
					onClick={() => setSelectedTab("following")}
					className={`w-1/2 border-b ${
						selectedTab === "following"
							? " border-white text-white font-medium"
							: "border-gray-500 text-gray-500"
					}`}
				>
					Following
				</button>
			</div>

			<form className="py-4 px-6">
				<div className="flex rounded-lg bg-gray-800 border border-gray-500">
					<MagnifyingGlassIcon className="w-8 h-8 text-gray-500 p-2" />
					<input
						type="text"
						className="bg-transparent focus:outline-none "
						placeholder="Search..."
					/>
				</div>
			</form>

			<div className="flex-1 overflow-y-auto">
				{selectedTab === "followers" &&
					(followers.length > 0 ? (
						followers.map((follower) => (
							<SearchResult
								fullname={follower.fullname}
								id={follower.userId}
								profilePictureUrl={follower.profilePictureUrl}
								username={follower.username}
								key={follower.username}
								isFollowing={loggedInUser.following.some(
									(following) => following.userId === follower.userId
								)}
								loggedInUser={loggedInUser}
							/>
						))
					) : (
						<div className="text-center font-semibold">User not found</div>
					))}
				{selectedTab === "following" &&
					(followings.length > 0 ? (
						followings.map((following) => (
							<SearchResult
								fullname={following.fullname}
								id={following.userId}
								profilePictureUrl={following.profilePictureUrl}
								username={following.username}
								key={following.username}
								isFollowing={loggedInUser.following.some(
									(foll) => foll.userId === following.userId
								)}
								loggedInUser={loggedInUser}
							/>
						))
					) : (
						<div className="text-center font-semibold">User not found</div>
					))}
			</div>
		</div>
	);
};

export default FollowingComponent;
