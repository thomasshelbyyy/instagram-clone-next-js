import { LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const UserBio = () => {
	return (
		<div className="text-xs md:text-sm">
			<p className="font-medium">User fulname ere</p>
			<p className="text-gray-600">digital creator</p>
			<p>helllo world i am a web developer</p>
			<Link href="/" className="text-blue-300 flex gap-2 items-center">
				<LinkIcon className="w-3 h-3" /> www.instagram.com
			</Link>
		</div>
	);
};

export default UserBio;
