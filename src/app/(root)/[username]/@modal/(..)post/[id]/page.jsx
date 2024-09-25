import Modal from "@/components/core/modal";
import PostDetailWModal from "@/components/core/PostDetailWModal";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const getPost = async (id) => {
	const baseUrl = process.env.NEXT_BASE_URL;
	const res = await fetch(`${baseUrl}/api/post/get?post-id=${id}`);

	const data = await res.json();
	return data;
};

const PostModal = async ({ params }) => {
	const res = await getPost(params.id);
	const post = res.data;
	console.log({ post });
	return (
		<Modal>
			<button className="fixed top-1/2 left-2 p-1 rounded-full bg-white">
				<ChevronLeftIcon className="w-7 h-7 text-black" />
			</button>
			<PostDetailWModal
				caption={post.caption}
				commentsCount={post.commentsCount}
				createdAt={post.createdAt}
				isEdited={post.isEdited}
				likesCount={post.likesCount}
				mediaUrl={post.mediaUrl}
				profilePictureUrl={post.profilePictureUrl}
				username={post.username}
				comments={post.comments}
				likes={post.likes}
				postId={post.id}
			/>
			<button className="fixed top-1/2 right-2 p-1 rounded-full bg-white">
				<ChevronRightIcon className="w-7 h-7 text-black" />
			</button>
		</Modal>
	);
};

export default PostModal;
