import PostDetail from "@/components/core/PostDetail";
import PostPreview from "@/components/postPreview";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

const getPost = async (id) => {
	const baseUrl = process.env.NEXT_BASE_URL;
	const res = await fetch(`${baseUrl}/api/post/get?post-id=${id}`, {
		cache: "no-store",
	});

	const data = await res.json();
	return data;
};

const PostDetailPage = async ({ params }) => {
	const res = await getPost(params.id);
	const post = res.data;
	console.log({ post });
	return (
		<div className="md:px-12 pt-12 w-full bg-black pb-12">
			<div className="fixed top-0 left-0 w-full flex md:hidden bg-black justify-between items-center px-3 py-2">
				<button>
					<ChevronLeftIcon className="w-7 h-7" />
				</button>
				<div className=" font-semibold">username post</div>
				<div className="w-2"></div>
			</div>
			<PostDetail
				caption={post.caption}
				commentsCount={post.commentsCount}
				createdAt={post.createdAt}
				isEdited={post.isEdited}
				likesCount={post.likesCount}
				mediaUrl={post.mediaUrl}
				profilePictureUrl={post.profilePictureUrl}
				username={post.username}
				post={post}
				likes={post.likes}
				comments={post.comments}
				postId={post.id}
			/>

			<div className="w-full h-[1px] bg-gray-400 mt-20 mb-6"></div>
			<div className="font-semibold text-sm p-3">More from this user</div>
			<div className="grid grid-cols-3 gap-1">
				{/* <PostPreview />
				<PostPreview />
				<PostPreview />
				<PostPreview />
				<PostPreview /> */}
			</div>
		</div>
	);
};

export default PostDetailPage;
