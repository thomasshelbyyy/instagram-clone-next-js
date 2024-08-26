import { ChevronDownIcon, EllipsisHorizontalIcon, UserPlusIcon } from "@heroicons/react/24/solid"

const ProfileCTA = ({ username, followers, following, posts }) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-center pb-3 gap-3">
                <div className="flex justify-between items-center lg:gap-4">
                    <p className="text-lg lg:text-xl font-semibold pr-4">{username}</p>
                    <button className="cursor-pointer lg:hidden">
                        <EllipsisHorizontalIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-3 text-xs md:text-sm lg:gap-4 lg:ml-auto">
                    <button className="flex gap-1 items-center px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
                        Following
                        <ChevronDownIcon className="w-5 h-5" />
                    </button>

                    <button className="px-3 py-1 bg-gray-600 cursor-pointer rounded-md">Message</button>

                    <button className="px-3 py-1 bg-gray-600 cursor-pointer rounded-md">
                        <UserPlusIcon className="w-5 h-5" />
                    </button>

                    <button className="cursor-pointer hidden lg:block">
                        <EllipsisHorizontalIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>


            <div className="hidden md:flex gap-5">
                <span><span className="font-semibold">1,234 </span> Posts</span>
                <span><span className="font-semibold">234k </span> followers</span>
                <span><span className="font-semibold">234 </span> following</span>
            </div>
        </div>
    )
}

export default ProfileCTA