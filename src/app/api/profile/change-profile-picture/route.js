// API

import { updateProfilePicture } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function POST(req) {

    const formData = await req.formData()
    const userId = formData.get("userId")
    const file = formData.get("file")

    console.log({userId, file})
    try {
        
        const res = await updateProfilePicture(userId, file)
        if(res.status) {
            return NextResponse.json({status: 200, message: res.message, newProfilePictureUrl: res.newProfilePictureUrl})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: "Unexpected error, try again later"})
    }
}