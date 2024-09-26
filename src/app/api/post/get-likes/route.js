import { getLikesByPostId } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const postId = searchParams.get("post-id")

    try {
        const res = await getLikesByPostId(postId)

        if(res.status) {
            return NextResponse.json({status: 200, data: res.data})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}