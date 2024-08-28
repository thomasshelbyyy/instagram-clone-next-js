import { fxRijkard } from "@/assets/profile/images";
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

const PostDetailWModal = () => {
	return (
		<div className="flex flex-col md:flex-row w-3/4  border border-gray-700 rounded-md h-auto md:h-[600px]">
			<div className="w-full md:w-7/12 h-full bg-gray-600 rounded-l-md ">
				<div className="px-3 py-1 flex justify-between border-b border-gray-500 md:hidden">
					<div className="flex items-center gap-1">
						<Avatar hasNewStory={true} />
						<button className="font-semibold ">leomessi</button>
						<span>&bull;</span>
						<span className="Following"></span>
					</div>

					<button>
						<EllipsisHorizontalIcon className="w-6 h-6" />
					</button>
				</div>
				<Image
					alt=""
					src={fxRijkard}
					width={100}
					height={100}
					className="w-full md:w-fit h-auto md:h-full"
				/>
			</div>
			<div className="w-full md:w-5/12 h-full bg-zinc-950 rounded-r-md flex flex-col text-xs">
				<div className="px-3 py-1 hidden md:flex justify-between border-b border-gray-500">
					<div className="flex items-center gap-1">
						<Avatar hasNewStory={true} />
						<button className="font-semibold ">leomessi</button>
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
							<Avatar />
						</div>
						<div className="flex-1 text-sm font-medium">
							<button className="font-semibold">leomessi</button>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
								adipisci voluptatibus molestias accusamus consectetur
								dignissimos aperiam eum culpa fugit accusantium.
							</p>
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
								sint iure reiciendis porro, dolore optio.
							</p>
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Exercitationem optio fugiat ad, neque commodi debitis ullam
								minus, libero error, hic quae architecto vero eum ea cum ut
								dolorum voluptate dicta laudantium tenetur. Suscipit,
								praesentium.
							</p>
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem placeat quasi nemo beatae dolores earum, porro
								molestiae, inventore eos perspiciatis culpa maiores alias
								pariatur enim aspernatur, illo delectus iure eligendi.
							</p>
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

					<button className="font-semibold pt-3 pb-1">1,343 likes</button>
					<div className=" text-gray-400">1 hour</div>

					<div className="flex pt-8 gap-2">
						<Avatar />
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
