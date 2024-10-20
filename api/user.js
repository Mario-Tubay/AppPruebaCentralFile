import { Global } from "../lib/Globals"

export const registerUser = async (form) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error al registrar"
                }
            })

        return response
    } catch (e) {
        return {
            status: "error",
            message: "Ocurrio un error al registrar"

        }
    }
}