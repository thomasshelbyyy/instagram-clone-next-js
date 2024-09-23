import ProfileAvatar from "@/components/profileAvatar";
import ProfileCTA from "@/components/profileCTA";
import ProfilePosts from "@/components/profilePosts";
import UserBio from "@/components/userBio";
import authOptions from "@/lib/nextAuth/authOptions";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { getServerSession } from "next-auth";

export const metadata = {
	title: "Instagram | Profile",
};

const fetchUser = async (username) => {
	const baseUrl = process.env.NEXT_BASE_URL;
	try {
		const res = await fetch(`${baseUrl}/api/user?username=${username}`, {
			headers: {
				"Cache-Control": "no-cache",
			},
			cache: "no-store",
		});
		const result = await res.json();
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const fetchPost = async (username) => {
	const baseUrl = process.env.NEXT_BASE_URL;
	try {
		const res = await fetch(`${baseUrl}/api/post/get?username=${username}`, {
			headers: {
				"Cache-Control": "no-cache",
			},
			cache: "no-store",
		});
		const result = await res.json();
		return result.data;
	} catch (error) {
		console.log(error);
	}
};

const Page = async ({ params }) => {
	const user = await fetchUser(params.username);
	const session = await getServerSession(authOptions);
	const loggedInUser = await fetchUser(session.username);
	const posts = await fetchPost(session.username);
	const profilePictureUrl = user.profilePictureUrl;
	console.log(posts);
	return (
		<>
			<div className="w-full flex justify-between px-3 py-2 border-b border-gray-600 fixed top-0 left-0 bg-black md:hidden">
				<button>
					<ChevronLeftIcon className="w-6 h-6 text-white" />
				</button>

				<span className="text-sm font-semibold">{user.username}</span>

				<div className="w-8"></div>
			</div>
			<div className="md:px-5 lg:px-10 w-full bg-black pb-12 md:pb-2 pt-12 md:pt-3">
				<div className="md:full lg:w-[90%]">
					<div className="flex gap-8 md:gap-16 px-6 md:px-10 lg:px-12 items-center">
						<ProfileAvatar
							hasNewStory={true}
							profilePictureUrl={profilePictureUrl}
							isLoggedInUser={user.username === session.username}
							userId={user.id}
						/>
						<div>
							<ProfileCTA user={user} loggedInUser={loggedInUser} />
							<div className="hidden md:flex">
								<UserBio bio={user.bio} fullname={user.fullname} />
							</div>
						</div>
					</div>

					<div className="md:hidden p-4">
						<UserBio bio={user.bio} fullname={user.fullname} />
					</div>
				</div>
				<div className="flex md:hidden pt-1 border-t border-gray-400 text-white text-sm">
					<div className="text-center flex-1">
						<p className="font-semibold">{loggedInUser.postCount}</p>
						<p className="text-gray-500">posts</p>
					</div>
					<div className="text-center flex-1">
						<p className="font-semibold">{loggedInUser.followersCount}</p>
						<p className="text-gray-500">followers</p>
					</div>
					<div className="text-center flex-1">
						<p className="font-semibold">{loggedInUser.followingCount}</p>
						<p className="text-gray-500">following</p>
					</div>
				</div>
				{posts.length > 0 ? (
					<ProfilePosts posts={posts} />
				) : (
					<p>Post not found</p>
				)}
			</div>
		</>
	);
};

export default Page;
