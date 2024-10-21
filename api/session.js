import * as SecureStore from 'expo-secure-store';
import { Global } from '../lib/Globals';

export const session = async (form) => {
   try {
      const response = await fetch(`${Global.API_URL}/user/login`,{
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(form)
      })
      .then(res => res.json())
      .catch(e => {
         return {
            status: "error",
            message: "Ocurrio un error al iniciar sesion"
         }
      })
      console.log(response)

      if(response.status === "error") return response;

      await SecureStore.setItemAsync("user", JSON.stringify(response.user));
      return { status: "success", user: response.user }
   } catch (error) {
      return {
         status: "error",
         message: "Ocurrio un error",
         errorMessage: error.message,
      }
   }
}

export const sessionLogout = async () => {
   try {
      await SecureStore.deleteItemAsync("user");
      return {
         status: "success",
         message: "Sesion cerrada correctamente"
      }
   } catch (error) {
      return {
         status: "error",
         message: "Ocurrio un error",
         errorMessage: error.message,
      }
   }
}

export const getSession = async () => {
   try {
      const user = await SecureStore.getItemAsync("user");
      if (!user) return { status: "logout", message: "No hay session" }
      return { status: "authenticated", user: JSON.parse(user) }
   } catch (error) {
      return {
         status: "error",
         message: "Ocurrio un error",
         errorMessage: error.message,
      }
   }
}


export const validateForm = (form) => {
   let errors = { email: "", password: "" };
   if (!form.email || form.email === "") errors.email = "El correo es obligatorio"
   if (!form.password) errors.password = "La contraseña es obligatoria";
   return errors;
 };
 