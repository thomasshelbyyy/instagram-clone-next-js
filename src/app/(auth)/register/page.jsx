import { FaFacebookSquare } from "react-icons/fa";
import { Satisfy } from "@next/font/google";
import Link from "next/link";
import appStore from "@/assets/download-app-store.svg";
import googlePlay from "@/assets/download-google-play.png";
import Image from "next/image";

const satisfy = Satisfy({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Instagram | Register",
};

const Page = () => {
	return (
		<main className="w-full min-h-screen bg-black text-white flex flex-col  items-center py-6">
			<div className="rounded-sm border border-gray-300 w-72 p-8 text-sm text-center">
				<h1 className={`${satisfy.className} font-medium text-3xl`}>
					Instagram
				</h1>
				<p className="py-3">
					Sign up to see photos and videos from your friends
				</p>
				<button className="flex items-center bg-blue-600 rounded-sm mx-auto px-3 py-1 my-2">
					<FaFacebookSquare />
					Log in with Facebook
				</button>

				<div className="flex items-center gap-6 text-gray-400">
					<div className="flex-1 h-[1px] bg-gray-400"></div>
					OR
					<div className="flex-1 h-[1px] bg-gray-400"></div>
				</div>

				<form action="/" className="pt-3 text-black">
					<input
						type="text"
						className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2"
						placeholder="Mobile phone or email address"
					/>
					<input
						type="text"
						className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2"
						placeholder="Full Name"
					/>
					<input
						type="text"
						className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2"
						placeholder="Username"
					/>
					<input
						type="password"
						className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2"
						placeholder="Password"
					/>

					<p className="text-xs text-white">
						People who use our services may have uploaded your contact
						information to Instagram.
						<button className="font-medium text-blue-500">Learn More</button>
					</p>
					<p className="text-xs text-white py-2">
						By signing up you agree to our{" "}
						<button className="font-medium text-blue-500" type="button">
							Terms
						</button>
						,
						<button className="font-medium text-blue-500" type="button">
							Privary and Policy
						</button>
						and
						<button className="font-medium text-blue-500" type="button">
							Cookies Policy
						</button>
					</p>

					<button
						type="submit"
						className="w-full py-1 bg-blue-500 text-white rounded-sm"
					>
						Sign Up
					</button>
				</form>
			</div>

			<div className="rounded-sm border border-gray-300 w-72 p-8 text-sm text-center mt-4">
				Have and account?{" "}
				<Link href="/login" className="font-semibold text-blue-500">
					{" "}
					Log In
				</Link>
			</div>

			<div className="pt-8">Get the app</div>
			<div className="flex gap-6">
				<button>
					<Image
						width={100}
						height={100}
						className="w-32"
						alt=""
						src={googlePlay}
					/>
				</button>
				<button>
					<Image
						width={100}
						height={100}
						className="w-32"
						alt=""
						src={appStore}
					/>
				</button>
			</div>
		</main>
	);
};

export default Page;
