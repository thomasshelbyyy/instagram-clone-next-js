import { Squares2X2Icon as SquareOutline, PlayCircleIcon as PlayOutline, UsersIcon as UsersOutline } from "@heroicons/react/24/outline"
import { Squares2X2Icon as SquareSolid, PlayCircleIcon as PlaySolid, UsersIcon as UsersSolid } from "@heroicons/react/24/solid"

const PostTab = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex justify-center gap-10 text-white font-medium border-t border-gray-400 ">
            <button
                onClick={() => setActiveTab("posts")}
                className={`py-3 relative flex flex-1 md:flex-none justify-center before:absolute before:top-0 left:0 before:w-full before:h-[2px]  ${activeTab === "posts" ? "before:bg-white" : "text-gray-200"}`}
            >
                {activeTab === "posts" ? <SquareSolid className="w-6 h-6 pr-1" /> : <SquareOutline className="w-6 h-6 pr-1" />}
                <span className="hidden md:block">Posts</span>
            </button>
            <button
                onClick={() => setActiveTab("reels")}
                className={`py-3 relative flex flex-1 md:flex-none justify-center before:absolute before:top-0 left:0 before:w-full before:h-[2px]  ${activeTab === "reels" ? "before:bg-white" : "text-gray-200"}`}
            >
                {activeTab === "reels" ? <PlaySolid className="w-6 h-6 pr-1" /> : <PlayOutline className="w-6 h-6 pr-1" />}
                <span className="hidden md:block">Reels</span>
            </button>
            <button
                onClick={() => setActiveTab("tags")}
                className={`py-3 relative flex flex-1 md:flex-none justify-center before:absolute before:top-0 left:0 before:w-full before:h-[2px]  ${activeTab === "tags" ? "before:bg-white" : "text-gray-200"}`}
            >
                {activeTab === "tags" ? <UsersSolid className="w-6 h-6 pr-1" /> : <UsersOutline className="w-6 h-6 pr-1" />}
                <span className="hidden md:block">Tagged</span>
            </button>
        </div>
    )
}

export default PostTab