// @ts-ignore
import {getServerSession} from 'next-auth/server'
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async (req: any, res: { send: (arg0: { content?: string; error?: string; }) => void; }) => {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
        res.send({
            content:
                "This is protected content. You can access this content because you are signed in.",
        })
    } else {
        res.send({
            error: "You must be signed in to view this page."
        })
    }

}