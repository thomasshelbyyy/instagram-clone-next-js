import { toggleLikeComment } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {username, userId, fullname, profilePictureUrl, postId, commentId} = await req.json()

    try {
        const res = await toggleLikeComment(postId, userId, username, profilePictureUrl, commentId, fullname)
        if(res.status) {
            return NextResponse.json({status: 200})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}