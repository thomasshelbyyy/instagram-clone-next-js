import { getUser } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const username = searchParams.get("username")

    if(!username) {
        return NextResponse.json({message: "user not found"}, {status: 404})
    }

    console.log({username})

    try {
        const user = await getUser(username)
        if(user.status) {
            return NextResponse.json({data: user.data}, {status: 200})
        } else {
            return NextResponse.json({message: user.message}, {status: 404})
        }
    } catch(error) {
        return NextResponse.json({message: "failed to fetch user"}, {status: 404})
    }
}