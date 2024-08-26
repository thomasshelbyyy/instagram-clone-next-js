import Image from "next/image";

const HomeSuggestedAccount = ({ image, username }) => {
	return (
		<div className="flex justify-between items-center mb-3">
			<div className="flex ">
				<Image
					width={100}
					height={100}
					src={image}
					alt=""
					className="w-9 h-9 rounded-full"
				/>
				<div className="text-xs pl-2">
					<p>{username}</p>
					<p className="text-gray-500">followed by ronaldo9</p>
				</div>
			</div>

			<button className="text-xs text-blue-500 hover:text-blue-200 cursor-pointer font-medium">
				Follow
			</button>
		</div>
	);
};

export default HomeSuggestedAccount;
