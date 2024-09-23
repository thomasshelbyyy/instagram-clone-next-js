"use client";

import { useState } from "react";
import PostTab from "../postTab";
import PostPreview from "../postPreview";

const ProfilePosts = ({ posts }) => {
	const [activeTab, setActiveTab] = useState("posts");
	return (
		<div className="w-full pt-6">
			<PostTab activeTab={activeTab} setActiveTab={setActiveTab} />
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
		</div>
	);
};
export default ProfilePosts;
