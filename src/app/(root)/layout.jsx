import Navigation from "@/components/navigation";
import BottomMenu from "@/components/bottomMenu";
import Main from "@/components/Main";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextAuth/authOptions";

export default async function MainLayout({ children }) {
	const session = await getServerSession(authOptions);
	console.log(session);
	return (
		<>
			<Navigation session={session} />
			<Main>{children}</Main>
			<BottomMenu />
		</>
	);
}
