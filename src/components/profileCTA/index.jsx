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

const ProfileCTA = ({
	username,
	followers,
	following,
	posts,
	loggedInUser,
}) => {
	const [settingActive, setSettingActive] = useState(false);
	return (
		<div>
			<div className="flex flex-col lg:flex-row lg:items-center pb-3 gap-3">
				<div className="flex justify-between items-center lg:gap-4">
					<p className="text-lg lg:text-xl font-semibold pr-4">{username}</p>
					<button className="cursor-pointer lg:hidden">
						<EllipsisHorizontalIcon className="w-5 h-5" />
					</button>
				</div>

				{loggedInUser === username ? (
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
						<button className="flex gap-1 items-center px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
							Following
							<ChevronDownIcon className="w-5 h-5" />
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
				<span>
					<span className="font-semibold">{followers} </span> followers
				</span>
				<span>
					<span className="font-semibold">{following} </span> following
				</span>
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
		</div>
	);
};

export default ProfileCTA;
