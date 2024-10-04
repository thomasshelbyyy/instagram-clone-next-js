import { getCommentLikes } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const commentId = searchParams.get("comment-id")
    const postId = searchParams.get("post-id")

    try {
        if(!commentId || !postId) {
            return NextResponse.json({status: 400, message: "data not found"})
        }

        const res = await getCommentLikes(commentId, postId)

        if(!res.status) {
            return NextResponse.json({status: 400, message: res.message})
        }

        return NextResponse.json({status: 200, data: res.data})
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}