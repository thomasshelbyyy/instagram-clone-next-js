import Image from "next/image";
import { fxRijkard, magPole } from "../../../assets/profile/images";

const LikeComment = () => {
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
					<span> liked your comment: </span>
					<span> te quiero hermano </span>
					<span className="text-gray-500"> 1h </span>
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

export default LikeComment;
