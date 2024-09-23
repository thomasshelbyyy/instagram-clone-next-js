import { createPost } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function POST(req) {
    const formData = await req.formData()
    const username = formData.get("username")
    const profilePictureUrl = formData.get("profilePictureUrl")
    const image = formData.get("image")
    const caption = formData.get("caption")
    const userId = formData.get("userId")

    try {
        const res = await createPost(userId, username, profilePictureUrl, image, caption)
        if(res.status) {
            return NextResponse.json({status: 200})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}