import { register } from "@/lib/firebase/service";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { email, fullname, username, password } = await request.json();

        // Panggil fungsi register
        const result = await register({ email, fullname, username, password });

        if (result.status) {
            return NextResponse.json({ message: "Register success", status: 200 });
        } else {
            return NextResponse.json({ message: result.message, status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ message: "Oops something went wrong" }, { status: 500 });
    }
}