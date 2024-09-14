import { followUser } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {userData, userToFollow} = await req.json()

        const res = await followUser(userData, userToFollow)

        if(res.status) {
            return NextResponse.json({status: 200})
        } else {
            return NextResponse.json({status: 400, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}