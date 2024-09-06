import { LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const UserBio = ({ bio, fullname }) => {
	return (
		<div className="text-xs md:text-sm">
			{fullname.length > 0 && <p>{fullname}</p>}
			<p className="text-gray-600">digital creator</p>
			{bio.length > 0 && <p className="font-medium">{bio}</p>}
			<Link href="/" className="text-blue-300 flex gap-2 items-center">
				<LinkIcon className="w-3 h-3" /> www.instagram.com
			</Link>
		</div>
	);
};

export default UserBio;
