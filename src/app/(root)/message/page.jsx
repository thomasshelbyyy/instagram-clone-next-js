import ChatBox from "@/components/Message/chatBox";
import ContactBox from "@/components/Message/contactBox";

export const metadata = {
	title: "Instagram | Message",
};

const Page = () => {
	return (
		<div className="h-full w-full flex overflow-hidden">
			<ContactBox />
			<ChatBox />
		</div>
	);
};

export default Page;
