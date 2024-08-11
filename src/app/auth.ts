import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {}
            },
            authorize: async (credentials) => {
                let user = null

                // logic to salt and hash password
                const pwHash = saltAndHashPassword(credentials.password)

                // logic to verify if the user exists
                user = await getUserFromDb(credentials.email, pwHash)

                if (!user) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }

                // return user object with their profile data
                return user
            }
        })
    ]
})