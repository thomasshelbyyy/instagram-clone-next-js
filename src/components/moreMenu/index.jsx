import {
	AtSymbolIcon,
	BookmarkIcon,
	ChartBarSquareIcon,
	Cog8ToothIcon,
	ExclamationCircleIcon,
	SunIcon,
} from "@heroicons/react/24/outline";

const MoreMenu = () => {
	return (
		<ul
			className="absolute z-50 w-60 text-sm bg-gray-950 rounded-lg shadow-sm
			md:bottom-0 md:-right-60
			lg:bottom-12m lg:left-0"
		>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left px-4 py-3 flex items-center gap-2 rounded-t-lg">
					<Cog8ToothIcon className="w-6 h-6" />
					Settings
				</button>
			</li>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left px-4 py-3 flex items-center gap-2">
					<ChartBarSquareIcon className="w-6 h-6" />
					Your Activity
				</button>
			</li>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left px-4 py-3 flex items-center gap-2">
					<BookmarkIcon className="w-6 h-6" />
					Saved
				</button>
			</li>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left px-4 py-3 flex items-center gap-2">
					<SunIcon className="w-6 h-6" />
					Switch Appearance
				</button>
			</li>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left px-4 py-3 flex items-center gap-2">
					<ExclamationCircleIcon className="w-6 h-6" />
					Report a Problem
				</button>
			</li>

			<div className="w-full h-[3px] bg-gray-600"></div>

			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left p-4 flex items-center gap-2">
					<AtSymbolIcon className="w-6 h-6" />
					Threads
				</button>
			</li>

			<div className="w-full h-[3px] bg-gray-600"></div>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left p-4">
					Threads
				</button>
			</li>
			<div className="w-full h-[1px] bg-gray-600"></div>
			<li className="w-full">
				<button className="hover:bg-gray-800 w-full text-left p-4 rounded-b-lg">
					Logout
				</button>
			</li>
		</ul>
	);
};

export default MoreMenu;
