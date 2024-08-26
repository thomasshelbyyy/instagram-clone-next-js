import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import {
	BookmarkIcon,
	ChatBubbleOvalLeftIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Post = ({ image, username, avatar, caption, likes, comments }) => {
	return (
		<div className="w-full md:w-[460px] flex flex-col pb-4 pt-5 border-b border-gray-600">
			<div className="flex justify-between px-3">
				<div className="flex items-center gap-1 pb-2">
					<Image
						width={100}
						height={100}
						src={avatar}
						alt=""
						className="w-7 h-7 rounded-full"
						unoptimized
					/>
					<div>
						<p className="text-xs font-bold">{username}</p>
					</div>
					<p className="text-xs text-gray-500 font-medium">1 d</p>
				</div>

				<button>
					<EllipsisHorizontalIcon className="w-6 h-6" />
				</button>
			</div>

			<Image
				width={100}
				height={100}
				src={image}
				alt=""
				className="w-full rounded-sm"
			/>

			<div className="py-2 flex justify-between px-3">
				<div className="flex gap-3">
					<button>
						<HeartIcon className="w-6 h-6" />
					</button>
					<button>
						<ChatBubbleOvalLeftIcon className="w-6 h-6" />
					</button>
					<button>
						<PaperAirplaneIcon className="w-6 h-6 transform -rotate-45 " />
					</button>
				</div>

				<button>
					<BookmarkIcon className="w-6 h-6" />
				</button>
			</div>

			<button className="font-semibold text-sm cursor-pointer w-fit px-3">
				{likes} likes
			</button>

			<p className="text-sm px-3">
				<span className="font-semibold pr-1">
					<Link href="/">{username}</Link>
				</span>
				{caption}
			</p>

			<button className="text-sm text-gray-600 w-fit py-1 px-3">
				view all {comments} comments
			</button>

			<input
				type="text"
				className="text-sm bg-transparent focus:outline-none px-3"
				placeholder="Add your comment"
			/>
		</div>
	);
};

export default Post;
