import Image from "next/image";
import { fxRijkard, magPole } from "../../../assets/profile/images";

const ReplyComment = () => {
	return (
		<button className="w-full flex justify-between items-center gap-3 px-3 py-2 hover:bg-gray-600">
			<div className="flex items-center gap-1">
				<Image
					width={100}
					height={100}
					src={fxRijkard}
					alt=""
					className="w-8 h-8 rounded-full"
				/>
				<div className="text-sm text-left">
					<span className="font-semibold"> neymarjr </span>
					<span> replied your comment in </span>
					<span className="font-semibold"> leomessi&apos;s </span>
					<span> post: </span>
					<span> que pasa tio? Estas bien? </span>
					<span className="text-gray-500"> 25m </span>
				</div>
			</div>

			<Image
				width={100}
				height={100}
				src={magPole}
				alt=""
				className="w-9 h-9 rounded-lg"
			/>
		</button>
	);
};

export default ReplyComment;
