const ChatSection = () => {
	return (
		<div className="flex-1 overflow-y-auto p-4">
			{/* Chat messages would go here */}
			<div className="space-y-4 text-sm">
				{/* Example chat messages */}
				<div className="text-center text-gray-400">15 Apr 2024</div>
				<div className="bg-gray-500 p-2 self-start w-fit max-w-xs rounded-2xl">
					Hello, how are you? Lorem ipsum dolor sit amet consectetur
					adipisicing.
				</div>
				<div className="bg-blue-500 text-white p-2 rounded-2xl self-end w-fit max-w-xs float-right ">
					I&apos;m good, thanks! How about you?
				</div>
			</div>
		</div>
	);
};

export default ChatSection;
