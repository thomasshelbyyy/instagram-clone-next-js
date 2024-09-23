import Image from "next/image";
import Avatar from "../avatar";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import {
	BookmarkIcon,
	ChatBubbleOvalLeftIcon,
	FaceSmileIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { timeAgo } from "@/lib/firebase/service";

const PostDetailWModal = ({
	mediaUrl,
	caption,
	commentsCount,
	likesCount,
	profilePictureUrl,
	createdAt,
	username,
	isEdited,
}) => {
	const time = timeAgo(createdAt);
	return (
		<div className="flex flex-col md:flex-row w-3/4  border border-gray-700 rounded-md h-auto md:h-[600px]">
			<div className="w-full md:w-7/12 h-full bg-gray-600 rounded-l-md ">
				<div className="px-3 py-1 flex justify-between border-b border-gray-500 md:hidden">
					<div className="flex items-center gap-1">
						<Avatar hasNewStory={true} profilePictureUrl={profilePictureUrl} />
						<Link href={`/${username}`} className="font-semibold ">
							{username}
						</Link>
						<span>&bull;</span>
						<span className="Following"></span>
					</div>

					<button>
						<EllipsisHorizontalIcon className="w-6 h-6" />
					</button>
				</div>
				<Image
					alt=""
					src={mediaUrl}
					width={100}
					height={100}
					className="w-full md:w-fit h-auto md:h-full"
				/>
			</div>
			<div className="w-full md:w-5/12 h-full bg-zinc-950 rounded-r-md flex flex-col text-xs">
				<div className="px-3 py-1 hidden md:flex justify-between border-b border-gray-500">
					<div className="flex items-center gap-1">
						<Avatar hasNewStory={true} profilePictureUrl={profilePictureUrl} />
						<Link href={`/${username}`} className="font-semibold ">
							{username}
						</Link>
						<span>&bull;</span>
						<span className="Following"></span>
					</div>

					<button>
						<EllipsisHorizontalIcon className="w-6 h-6" />
					</button>
				</div>

				<div className="hidden md:block flex-1 overflow-y-auto px-3 py-2">
					<div className="flex gap-2">
						<div className="h-10 w-10">
							<Avatar profilePictureUrl={profilePictureUrl} />
						</div>
						<div className="flex-1 text-sm font-medium">
							<Link href={`/${username}`} className="font-semibold">
								{username}
							</Link>
							<div>{caption}</div>
						</div>
					</div>
				</div>

				<div className="px-3 py-2 border-t border-gray-500">
					<div className="flex justify-between">
						<div className="flex gap-3">
							<button>
								<HeartIcon className="w-6 h-6" />
							</button>
							<button>
								<ChatBubbleOvalLeftIcon className="w-6 h-6" />
							</button>
							<button>
								<PaperAirplaneIcon className="w-6 h-6 transform -rotate-45" />
							</button>
						</div>

						<button>
							<BookmarkIcon className="w-6 h-6" />
						</button>
					</div>

					<button className="font-semibold pt-3 pb-1">
						{likesCount} likes
					</button>
					<div className=" text-gray-400">{time}</div>

					<div className="flex pt-8 gap-2">
						<Avatar profilePictureUrl={profilePictureUrl} />
						<input
							type="text"
							className="flex-1 focus:outline-none bg-transparent text-sm"
							placeholder="Add a comment..."
						/>
						<button>
							<FaceSmileIcon className="w-6 h-6" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetailWModal;
