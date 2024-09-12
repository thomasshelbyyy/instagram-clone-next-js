import { removeProfilePicture } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function PUT(req) {
    const {userId} = await req.json()

    try {
        const res = await removeProfilePicture(userId)
        if(res.status) {
            return NextResponse.json({status: 200, message: "profile removed"})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}