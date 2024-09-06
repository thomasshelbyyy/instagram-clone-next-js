import { auth } from "@/lib/firebase/init"
import { getUserByEmail } from "@/lib/firebase/service"
import { sendPasswordResetEmail } from "firebase/auth"
import { NextResponse } from "next/server"

// COBA REGISTER DENGAN EMAIL SENDIRI KEMUDIAN LUPA PASSWORD APAKAH EMAIL TERKIRIM KE EMAIL SAYA
// SETELAH SARAPAN BACA INI!!!!!!!!!!
export async function POST(request) {
    try {
        const {email} = await request.json()

        const foundUser = await getUserByEmail(email)
        if(foundUser.status) {
            const res = await sendPasswordResetEmail(auth, email)
         return NextResponse.json({status: 200, data: foundUser.data, res})
        } else {
            return NextResponse.json({status: 404, message: "email not found"})
        }
    } catch(error) {
        return NextResponse.json({status: 400, message: "An unexpected error occured"})
    }


}