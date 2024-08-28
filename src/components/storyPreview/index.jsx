import Avatar from "../core/avatar";

const StoryPreview = ({ username, hasNewStory }) => {
	return (
		<button className="flex flex-col items-center">
			<Avatar hasNewStory={hasNewStory} />
			<small>{username}</small>
		</button>
	);
};

export default StoryPreview;
