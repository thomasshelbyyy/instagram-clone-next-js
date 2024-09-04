import Modal from "@/components/core/modal";
import PostDetailWModal from "@/components/core/PostDetailWModal";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const PostModal = () => {
	return (
		<Modal>
			<button className="fixed top-1/2 left-2 p-1 rounded-full bg-white">
				<ChevronLeftIcon className="w-7 h-7 text-black" />
			</button>
			<PostDetailWModal />
			<button className="fixed top-1/2 right-2 p-1 rounded-full bg-white">
				<ChevronRightIcon className="w-7 h-7 text-black" />
			</button>
		</Modal>
	);
};

export default PostModal;
