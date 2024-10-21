import { Global } from "../lib/Globals"

export const registerUser = async (form) => {
    try {
        const formData = new FormData();
        formData.append('file', {
            uri: form.foto,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });
        formData.append('nombre1', form.nombre1);
        formData.append('nombre2', form.nombre2);
        formData.append('apellido1', form.apellido1);
        formData.append('apellido2', form.apellido2);
        formData.append('email', form.email);
        formData.append('telefono', form.telefono);
        formData.append('celular', form.celular);
        formData.append('password', form.password);


        const response = await fetch(`${Global.API_URL}/user/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData
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

export const getContacts = async (id) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/getContacts/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error al obtener los usuarios"
                }
            })

        return response
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error al obtener los usuarios"
        }
    }
}

export const getNotContact = async (id) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/getNotContact/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error al obtener los usuarios"
                }
            })

        return response
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error al obtener los usuarios"
        }
    }
}

export const addUserContact = async (form) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/addUserContact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error",
                    errorMessage: e.message
                }
            })
        return response
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error al obtener los usuarios"
        }
    }
}