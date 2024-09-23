import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const PostPreview = ({ id, likesCount, commentsCount, image }) => {
	return (
		<Link
			href={`/post/${id}`}
			className="w-full aspect-square bg-gray-700 relative group"
		>
			<Image
				alt="post image"
				src={image}
				width={100}
				height={100}
				className="w-full h-full"
			/>
			<div className="absolute hidden group-hover:flex hover:bg-black-8 justify-center items-center w-full h-full top-0 left-0 bg-black/50 font-semibold gap-3">
				<div className="flex items-center gap-2">
					<HeartIcon className="w-6 h-6 text-white" />
					<span>{likesCount}</span>
				</div>
				<div className="flex items-center gap-2">
					<ChatBubbleOvalLeftIcon className="w-6 h-6 text-white" />
					<span>{commentsCount}</span>
				</div>
			</div>
		</Link>
	);
};

export default PostPreview;
