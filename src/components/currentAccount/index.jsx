import Image from "next/image";
import { brookeCagle } from "../../assets/profile/images";

const CurrentAccount = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<Image
					width={100}
					height={100}
					src={brookeCagle}
					alt=""
					className="w-9 h-9 rounded-full"
				/>
				<span className="text-xs pl-2 pr-6">los_pollos_hermano</span>
			</div>
			<button className="text-blue-500 hover:text-blue-200 text-xs cursor-pointer">
				switch
			</button>
		</div>
	);
};

export default CurrentAccount;
