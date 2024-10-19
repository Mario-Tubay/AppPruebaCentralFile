
import { useEffect, useState } from 'react'
import { getSession } from '../api/session'

export default function useSession() {
    const [isLoading, setLoading] = useState("loading")
    const [user, setUser] = useState(null)  

    const session = async () => {
        try {
            const response = await getSession()
            if(response.status === "logout"){
                setUser(null)
                setLoading("unauthenticated")
            }
            if(response.status === "authenticated"){
                setUser(response.data)
                setLoading("authenticated")
            }

            if(response.status === "error"){
                setLoading("error")
            }
        } catch (error) {
            console.error(error)
            setLoading("error")
        }
    }

    useEffect(() => {
        session()
    }, [])


    return {
        isLoading,
        user,
        session
    }


}