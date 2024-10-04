"use client";

import { useState } from "react";
import PostTab from "../postTab";
import PostPreview from "../postPreview";
import { CameraIcon } from "@heroicons/react/24/outline";

const ProfilePosts = ({ posts }) => {
	const [activeTab, setActiveTab] = useState("posts");
	return (
		<div className="w-full pt-6">
			<PostTab activeTab={activeTab} setActiveTab={setActiveTab} />

			{posts.length > 0 ? (
				<div className="grid grid-cols-3 gap-1">
					{posts.map((post) => (
						<PostPreview
							key={post.id}
							commentsCount={post.commentsCount}
							id={post.id}
							image={post.mediaUrl}
							likesCount={post.likesCount}
						/>
					))}
				</div>
			) : (
				<div className="w-full flex flex-col items-center pt-6">
					<div className="rounded-full p-2 border border-white">
						<CameraIcon className="w-10 h-10 text-white" />
					</div>
					<div className="pt-3 text-center text-xl font-medium">
						this user has not post anything
					</div>
				</div>
			)}
		</div>
	);
};
export default ProfilePosts;
