import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";

const PostPreview = () => {
	return (
		<button className="w-full aspect-square bg-gray-700 relative group">
			<div className="absolute hidden group-hover:flex hover:bg-black-8 justify-center items-center w-full h-full top-0 left-0 bg-black/50 font-semibold gap-3">
				<div className="flex items-center gap-2">
					<HeartIcon className="w-6 h-6 text-white" />
					<span>4m</span>
				</div>
				<div className="flex items-center gap-2">
					<ChatBubbleOvalLeftIcon className="w-6 h-6 text-white" />
					<span>24k</span>
				</div>
			</div>
		</button>
	);
};

export default PostPreview;
