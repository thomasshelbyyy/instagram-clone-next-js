// const { query, collection, where, getDocs } = require("firebase/firestore");
import {firestore, auth} from "@/lib/firebase/init"
import { addDoc, collection, doc, getDoc, getDocs, query, Timestamp, where } from "firebase/firestore"
import bcryptjs from "bcryptjs"

export async function register(data) {
    const emailQuery = query(collection(firestore, "email"), where("email", "==", data.email))
    const usernameQuery = query(collection(firestore, "username"), where("username", "==", data.username))
    
    const [emailSnapshot, usernameSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(usernameQuery)
    ])

    const emailExists = emailSnapshot.docs.length > 0
    const usernameExists = usernameSnapshot.docs.length > 0

    if(usernameExists) {
        return {status: false, statusCode: 400, message: "Username already taken"}
    }

    if(emailExists) {
        return {status: false, statusCode: 400, message: "Email already taken"}
    }
    const user = {
        email: data.email,
        username: data.username,
        fullname: data.fullname
    }
    user.passwordHash = await bcryptjs.hash(data.password, 10)
    user.profilePictureUrl = null
    user.bio = ""
    user.joinDate = Timestamp.now()
    user.followersCount = 0
    user.followingCount = 0
    user.followers = []
    user.following = []
    user.privacySettings = {
        profileVisibility: "public",
        messageRequest: true
    }

    try {
        await addDoc(collection(firestore, "users"), user)
        return { status: true, statusCode: 200, message: "Register Success" }
    } catch (error) {
        return { status: false, statusCode: 400, message: "Register Failed" }
    }
}

export async function login(username) {
    const q = query(collection(firestore, "users"), where("username", "==", username))
    const snapshot = await getDocs(q)

    const user = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    if (user) {
        return user[0]
    } else {
        return null
    }
}

export async function getUser(username) {
    const q = query(collection(firestore, "users"), where("username", "==", username))
    const snapshot = await getDocs(q)

    const user = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    if (user.length > 0) {
        return {status: true, data: user[0]}
    } else {
        return {status: false}
    }
}

export async function getUserByEmail(email) {
    const q = query(collection(firestore, "users"), where("email", "==", email))
    const snapshot = await getDocs(q)

    const user = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    if(user.length > 0) {
        return {status: true, data: user[0]}
    } else {
        return {status: false}
    }
}