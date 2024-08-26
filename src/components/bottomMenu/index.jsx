"use client";

import {
	HomeIcon as HomeSolid,
	ChatBubbleLeftEllipsisIcon as ChatSolid,
	GlobeAsiaAustraliaIcon as GlobeSolid,
} from "@heroicons/react/16/solid";
import {
	ChatBubbleLeftEllipsisIcon as ChatOutline,
	HomeIcon as HomeOutline,
	GlobeAsiaAustraliaIcon as GlobeOutline,
	PlayCircleIcon,
	PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { brookeCagle } from "../../assets/profile/images";
import { useState } from "react";
import CreatePost from "../createPost";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const BottomMenu = () => {
	const [createPostActive, setCreatePostActive] = useState(false);
	const pathname = usePathname();
	return (
		<div className="fixed bottom-0 py-1 px-5 w-screen md:hidden bg-black flex justify-evenly border-t border-gray-400 text-white">
			<Link href="/">
				{pathname === "/" ? (
					<HomeSolid className="w-8 h-8" />
				) : (
					<HomeOutline className="w-8 h-8" />
				)}
			</Link>
			<Link href="/explore">
				{pathname === "/explore" ? (
					<GlobeSolid className="w-8 h-8" />
				) : (
					<GlobeOutline className="w-8 h-8" />
				)}
			</Link>
			<button>
				<PlayCircleIcon className="w-8 h-8" />
			</button>
			<button onClick={() => setCreatePostActive(true)}>
				<PlusCircleIcon className="w-8 h-8" />
			</button>
			<Link href="/message">
				{pathname === "/message" ? (
					<ChatSolid className="w-8 h-8" />
				) : (
					<ChatOutline className="w-8 h-8" />
				)}
			</Link>
			<Link href="/profile">
				<Image
					width={100}
					height={100}
					src={brookeCagle}
					className="w-8 h-8 rounded-full"
					alt=""
				/>
			</Link>
			{createPostActive && <CreatePost setVisible={setCreatePostActive} />}
		</div>
	);
};

export default BottomMenu;
