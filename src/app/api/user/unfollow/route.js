import { unfollowUser } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {userId, userToUnfollowId} = await req.json()

    try {
        const res = await unfollowUser(userId, userToUnfollowId)

        if(res.status) {
            return NextResponse.json({status: 200,message: "user unfollowed"})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, })
    }
}