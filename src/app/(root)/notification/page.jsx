import Notifications from "@/components/notificationComponents/notifications";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export const metadata = {
	title: "Instagram | Notification",
};

const Page = () => {
	return (
		<>
			<div className="fixed w-full px-3 py-2 flex justify-between bg-black">
				<button>
					<ChevronLeftIcon className="w-6 h-6" />
				</button>

				<span className="font-semibold">Notification</span>

				<div className="w-8"></div>
			</div>

			<div className="w-full h-full overflow-y-auto py-10">
				<Notifications />
			</div>
		</>
	);
};

export default Page;
