"use client";

import { useState } from "react";
import PostTab from "../postTab";
import PostPreview from "../postPreview";

const ProfilePosts = () => {
	const [activeTab, setActiveTab] = useState("posts");
	return (
		<div className="w-full pt-6">
			<PostTab activeTab={activeTab} setActiveTab={setActiveTab} />
			<div className="grid grid-cols-3 gap-1">
				<PostPreview />
				<PostPreview />
				<PostPreview />
				<PostPreview />
				<PostPreview />
			</div>
		</div>
	);
};
export default ProfilePosts;
