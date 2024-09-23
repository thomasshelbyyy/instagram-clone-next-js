import { getPostById, getPosts } from "@/lib/firebase/service"
import { NextResponse } from "next/server"

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams
    const username = searchParams.get("username")
    const postId = searchParams.get("post-id")

    try {
        let res

        if(postId) {
            res = await getPostById(postId)
        } else {
            res = await getPosts(username)
        }

        if(res.status) {
            return NextResponse.json({status: 200, data: res.data})
        } else {
            return NextResponse.json({status: res.statusCode, message: res.message})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: error.message})
    }
}