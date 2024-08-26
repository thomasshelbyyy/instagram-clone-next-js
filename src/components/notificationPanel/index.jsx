import { XMarkIcon } from "@heroicons/react/16/solid"
import Notifications from "../notificationComponents/notifications"

const NotificationPanel = ({isVisible, onClose})=> {
    return (
        <div className={`fixed top-0 left-0 h-full w-full max-w-sm bg-black text-white flex flex-col transition-transform transform ${isVisible ? 'translate-x-24' : '-translate-x-full'} duration-500 z-50`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="text-xl font-semibold">Notification</h2>
                <button onClick={onClose}>
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
            <Notifications />
            </div>
        </div>
    )
}

export default NotificationPanel