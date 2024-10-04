import { postComment } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function POST(req)  {
    const {postId, username, profilePictureUrl, userId, comment} = await req.json()

    try {
        const res = await postComment(postId, userId, username, profilePictureUrl, comment)
        if(res.status) {
            return NextResponse.json({status: 200, message: "comment posted"})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}