import Image from "next/image";
import image from "../../assets/profile/brooke-cagle-R8bNESnnKR8-unsplash.jpg";

const StoryPreview = ({ username, hasNewStory }) => {
	return (
		<button className="flex flex-col items-center">
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
					src={image}
					alt={`${username}'s profile`}
					className="w-12 h-12 rounded-full border-2 border-white"
				/>
			</div>
			<small>{username}</small>
		</button>
	);
};

export default StoryPreview;
