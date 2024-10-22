import { Global } from "../lib/Globals"
import { getSession } from "./session";
import * as Network from 'expo-network';

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
        const stateNet = await Network.getNetworkStateAsync();
        console.log("Network", stateNet)

        
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


export const deleteContact = async (form) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/deleteContact`, {
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


export const deleteUserPermant = async (form) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/deleteUserPermanent`, {
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

export const updatePhotProfile = async (form) => {
    try {
        const formData = new FormData();
        formData.append('file', {
            uri: form.foto,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });
        formData.append('id_user', form.id_user);


        const response = await fetch(`${Global.API_URL}/user/updatePhotProfile`, {
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
        if (response.status == "success") {
            const user = await getSession()
        }
        return response
    } catch (e) {
        return {
            status: "error",
            message: "Ocurrio un error al registrar"
        }
    }
}

export const updateUser = async (form) => {
    try {
        console.log(form)
        const response = await fetch(`${Global.API_URL}/user/updateUser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error al actualizar",
                    errorMessage: e.message
                }
            })
        if (response.status == "success") {
            const user = await getSession()
        }
        return response
    } catch (e) {
        return {
            status: "error",
            message: "Ocurrio un error al actualizar",
            errorMessage: e.message
        }
    }
}

export const deshabilitarAcount = async (form) => {
    try {
        const response = await fetch(`${Global.API_URL}/user/deshabilitarCuenta`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then(res => res.json())
            .catch(e => {
                return {
                    status: "error",
                    message: "Ocurrio un error al actualizar",
                    errorMessage: e.message
                }
            })
        return response
    } catch (e) {
        return {
            status: "error",
            message: "Ocurrio un error al actualizar",
            errorMessage: e.message
        }
    }
}