import { toggleLike } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {postId, userId, username, profilePictureUrl} = await req.json()

    try {
        const res = await toggleLike(postId, userId, username, profilePictureUrl)
        // return NextResponse.json({postId, username, userId, profilePictureUrl})

        // return NextResponse.json({status: res.status ? 200 : 400, message: res.message})
        if(res.status) {
            return NextResponse.json({status: 200})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
        // return NextResponse.json({postId: res})
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}