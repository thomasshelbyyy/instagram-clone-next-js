// const { query, collection, where, getDocs } = require("firebase/firestore");
import {firestore, auth, storage} from "@/lib/firebase/init"
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, increment, query, Timestamp, updateDoc, where } from "firebase/firestore"
import bcryptjs from "bcryptjs"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

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

export async function uploadImage(userId, file) {
    try {
        const storageRef = ref(storage, `/profilePicture/${userId}/$${file.name}`)
        await uploadBytes(storageRef, file)
        return {status: true}
    } catch(error) {
        return {status: false, message: error}
    }
}

export async function updateProfilePicture(userId, file) {
    try {
        const storageRef = ref(storage, `/profilePicture/${userId}/${file.name}`)
        await uploadBytes(storageRef, file)
    
        const downloadURL = await getDownloadURL(storageRef)
    
        const userDocRef = doc(firestore, "users", userId)
    
        await updateDoc(userDocRef, {
            profilePictureUrl: downloadURL
        })
        return {status: true, message: "profile picture changed"}
    } catch(error) {
        return {status: false, message: error.message}
    }
}

export async function removeProfilePicture(userId) {
    try {
        const userDocRef = doc(firestore, "users", userId)

        await updateDoc(userDocRef, {
            profilePictureUrl: null
        })  

        return {status: true, message: "Profile removed"}
    } catch(error) {
        return {status: false, message: error.message}
    }
}

export async function followUser(userData, userToFollow) {
    try {
        const userDocRef = doc(firestore, "users", userData.userId)
        const userToFollowRef = doc(firestore, "users", userToFollow.userId)

        await updateDoc(userDocRef, {
            following: arrayUnion(userToFollow),
            followingCount: increment(1)
        })

        await updateDoc(userToFollowRef, {
            followers: arrayUnion(userData),
            followersCount: increment(1)
        })

        return {status: true}
    } catch(error) {
        return {status: false, message: error.message}
    }
}

export async function unfollowUser(userId, userToUnfollowId) {
    try {
        const userDocRef = doc(firestore, "users", userId);
        const userToUnfollowDocRef = doc(firestore, "users", userToUnfollowId);

        const userDocSnapshot = await getDoc(userDocRef)
        const userToUnfollowSnapshot = await getDoc(userToUnfollowDocRef)

        if(userDocSnapshot.exists() && userToUnfollowSnapshot.exists()) {
            const currentFollowing = userDocSnapshot.data().following || [];
            const currentFollowers = userToUnfollowSnapshot.data().followers || [];

            const updatedFollowing = currentFollowing.filter(
                (follow) => follow.userId !== userToUnfollowId
            );

            const updatedFollowers = currentFollowers.filter(
                (follower) => follower.userId !== userId
            );

            await updateDoc(userDocRef, {
                following: updatedFollowing,
                followingCount: increment(-1),
            });

            await updateDoc(userToUnfollowDocRef, {
                followers: updatedFollowers,
                followersCount: increment(-1),
            });

            return {status: true}
        }
    } catch (error) {
        return {status: false, message: error.message}
    }
}