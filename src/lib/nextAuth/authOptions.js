import CredentialsProvider from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import { login } from "../firebase/service"

const authOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {type: "text", label: "username"},
                password: {type: "password", label: "password"}
            },
            async authorize(credentials) {
                const { username, password } = credentials
                
                // Dummy user for demonstration purposes
                const user  = await login(username)
                
                if (user) {
                    const passwordMatch = await bcryptjs.compare(password, user.passwordHash)
                    if (passwordMatch) {
                        return user
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, account, profile, user}) {
            if(account?.provider === "credentials") {
                token.id = user.id,
                token.email = user.email,
                token.username = user.username
            }

            return token
        },
        async session({session, token}) {
            if("email" in token) {
                session.email = token.email
            }
            if("username" in token) {
                session.username = token.username
            }
            if("id" in token) {
                session.id = token.id
            }

            return session
        }

    },
    pages: {
        signIn: "/auth/login"
    }
}

export default authOptions