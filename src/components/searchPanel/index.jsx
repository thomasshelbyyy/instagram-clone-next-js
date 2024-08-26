import { XMarkIcon } from "@heroicons/react/24/outline"
import FoundUser from "../foundUser"

const SearchPanel = ({ isVisible, onClose }) => {
    return (
        <div className={`fixed top-0 left-0 h-full w-full max-w-sm bg-black text-white  transition-transform transform ${isVisible ? 'translate-x-24' : '-translate-x-full'} duration-500 z-50`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-semibold">Search</h2>
                <button onClick={onClose}>
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="p-6 w-full">
                <div className="mt-6 flex items-center w-full px-3 py-1 rounded-md bg-gray-500">
                    <input type="text" placeholder="search" className="focus:outline-none flex-1 bg-transparent" />
                    <button className="h-fit bg-white rounded-full">
                        <XMarkIcon className="w-4 h-4 text-black" />
                    </button>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-600 my-5"></div>
            <div className='px-6'>
                <div className="flex justify-between pb-3">
                    <div className="text-sm font-semibold">Recent</div>
                    <button className="text-blue-500 font-medium text-sm">Clear all</button>
                </div>
                <FoundUser />
            </div>
        </div>
    )
}

export default SearchPanel
