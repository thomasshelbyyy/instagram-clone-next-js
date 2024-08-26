import Image from "next/image";
import { phillipDeus } from "../../assets/profile/images";

const ProfileAvatar = ({ hasNewStory }) => {
	return (
		<button className="flex flex-col items-center w-1/5">
			<div
				className={`w-full md:w[70%] flex items-center justify-center rounded-full p-[3px] ${
					hasNewStory
						? "bg-gradient-to-tr from-red-500 via-purple-500 to-blue-500"
						: "bg-gray-500"
				}`}
			>
				<Image
					width={100}
					height={100}
					src={phillipDeus}
					className="w-full aspect-square rounded-full border-2 border-black"
					alt="profile avatar"
				/>
			</div>
		</button>
	);
};

export default ProfileAvatar;
