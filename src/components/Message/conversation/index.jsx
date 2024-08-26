import Image from "next/image";
import { richardJaimes } from "../../../assets/profile/images";

const Conversation = () => {
	return (
		<button className="w-full hover:bg-gray-500 px-3 py-2 flex gap-4">
			<Image
				width={100}
				height={100}
				src={richardJaimes}
				alt=""
				className="w-12 h-12 rounded-full"
			/>

			<div className="hidden lg:flex flex-col items-start justify-between h-full ">
				<p className="text-sm font-medium">richardJaimes</p>
				<p className="text-xs text-gray-700">
					You: Hey whats&apos;up <span>1 d</span>
				</p>
			</div>
		</button>
	);
};

export default Conversation;
