import Image from "next/image";
import React from "react";

const ChatApp = () => {
	return (
		<div className="flex h-full">
			{/* Contact List Section */}
			<div className="w-1/3 bg-gray-100 p-4 flex flex-col">
				{/* Header */}
				<div className="flex justify-between items-center mb-4">
					<span className="text-xl font-bold">Username</span>
					<button className="bg-blue-500 text-white px-3 py-1 rounded">
						Button
					</button>
				</div>

				{/* Contact List */}
				<div className="overflow-y-auto flex-1">
					{/* Contact Item */}
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Friend Username</div>
							<div className="text-sm text-gray-500">
								Last message preview...
							</div>
						</div>
					</div>

					{/* Repeat Contact Item for other contacts */}
					<div className="flex items-center p-2 bg-white rounded mb-2 hover:bg-gray-200 cursor-pointer">
						<Image
							width={100}
							height={100}
							src="https://via.placeholder.com/40"
							alt="Profile"
							className="w-10 h-10 rounded-full mr-4"
						/>
						<div>
							<div className="font-semibold">Another Friend</div>
							<div className="text-sm text-gray-500">
								Another message preview...
							</div>
						</div>
					</div>

					{/* Add more contact items as needed */}
				</div>
			</div>

			{/* Chat Section */}
			<div className="w-2/3 bg-white p-4 flex flex-col">
				{/* Chat Area */}
				<div className="overflow-y-auto flex-1 bg-gray-50 p-4 rounded">
					{/* Chat message */}
					<div className="mb-4">
						<div className="bg-blue-500 text-white p-2 rounded-md mb-2">
							Hi, how are you?
						</div>
						<div className="bg-gray-300 p-2 rounded-md">
							I&apos;m good, how about you?
						</div>
					</div>

					{/* Repeat chat messages as needed */}
				</div>

				{/* Message Input */}
				<div className="mt-4">
					<input
						type="text"
						placeholder="Type a message..."
						className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatApp;
