import { ChatBubbleOvalLeftIcon, HeartIcon } from "@heroicons/react/24/solid";

const ReelsPreview = () => {
	return (
		<button className="w-full h-full bg-gray-700 relative group">
			<div className="absolute hidden group-hover:flex justify-center items-center bg-black/50 w-full h-full top-0 left-0 gap-4">
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

export default ReelsPreview;
