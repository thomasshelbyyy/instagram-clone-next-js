import Navigation from "@/components/navigation";
import BottomMenu from "@/components/bottomMenu";
import Main from "@/components/Main";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextAuth/authOptions";
import { getUser } from "@/lib/firebase/service";

export default async function MainLayout({ children }) {
	const session = await getServerSession(authOptions);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/user?username=${session.username}`
	);

	const response = await res.json();
	const loggedInUser = response.data;

	const user = await getUser(session.username);

	console.log({ session, loggedInUser, user });
	return (
		<>
			<Navigation loggedInUser={loggedInUser} session={session} />
			<Main>{children}</Main>
			<BottomMenu loggedInUser={loggedInUser} />
		</>
	);
}
