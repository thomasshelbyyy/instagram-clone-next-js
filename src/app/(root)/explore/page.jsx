import Navbar from "@/components/navbar";
import PostPreview from "@/components/postPreview";
import ReelsPreview from "@/components/reelsPreview";

export const metadata = {
	title: "Instagram | Explore",
};

const Page = () => {
	return (
		<>
			<Navbar />
			<div className="py-14 md:px-6 md:py-1 bg-black">
				<div className="grid grid-cols-3 grid-rows-2 gap-1  pb-1">
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-2 bg-gray-700">
						<ReelsPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
				</div>
				<div className="grid grid-cols-3 grid-rows-2 gap-1  bg-black">
					<div className="col-span-1 row-span-2 bg-gray-700">
						<ReelsPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
					<div className="col-span-1 row-span-1 bg-gray-700 aspect-square">
						<PostPreview />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
