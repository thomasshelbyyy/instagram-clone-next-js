import Image from "next/image";
import { brookeCagle } from "@/assets/profile/images";

const Avatar = ({ hasNewStory }) => {
	return (
		<div
			className={`flex items-center justify-center rounded-full p-[3px] ${
				hasNewStory
					? "bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500"
					: "bg-gray-500"
			}`}
		>
			<Image
				width={100}
				height={100}
				src={brookeCagle}
				alt=""
				className="w-8 h-8 rounded-full border-2 border-white"
			/>
		</div>
	);
};

export default Avatar;
