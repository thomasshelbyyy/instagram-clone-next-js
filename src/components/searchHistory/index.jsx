"use client";

import FoundUser from "../foundUser";

const SearchHistory = ({ isVisible }) => {
	if (!isVisible) return null;

	return (
		<div className="fixed top-12 right-4 w-80 bg-gray-700 text-white border-t border-gray-400 rounded-sm">
			<div className="flex justify-between text-sm px-5 pt-5 pb-2">
				<div className="font-semibold">Recent</div>
				<button className="font-medium text-blue-500">Clear all</button>
			</div>

			<div className="mx-h-[500px] overflow-y-auto">
				<FoundUser />
			</div>
		</div>
	);
};

export default SearchHistory;
