import {
	InformationCircleIcon,
	PhoneIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { stevenLewis } from "../../../assets/profile/images";
import InputSection from "../input";
import ChatSection from "../chatSection";
import Image from "next/image";

const ChatBox = () => {
	return (
		<div className="h-full flex-1 flex flex-col">
			{/* User Info Section */}
			<div className="flex justify-between px-6 py-3 border-b border-gray-300 items-center">
				<Image
					width={100}
					height={100}
					src={stevenLewis}
					alt=""
					className="w-8 h-8 rounded-full"
				/>

				<div className="flex gap-3 items-center">
					<button>
						<PhoneIcon className="w-6 h-6" />
					</button>
					<button>
						<VideoCameraIcon className="w-6 h-6" />
					</button>
					<button>
						<InformationCircleIcon className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Chat Section */}
			<ChatSection />

			{/* Input Section */}
			<InputSection />
		</div>
	);
};

export default ChatBox;
