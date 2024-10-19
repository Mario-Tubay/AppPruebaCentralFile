import * as SecureStore from 'expo-secure-store';

export const session = async (form) => {
   try {
      const { email, pass } = form
      if (email !== "admin@mail.com") return { status: "error", message: "Credenciales invalidas" }
      if (pass !== "123456") return { status: "error", message: "Credenciales invalidas" }
      const response = {
         id: 1,
         nombre1: "Mario",
         nombre2: "Alberto",
         apellido1: "Tubay",
         apellido2: "Suarez",
         telefono: "1234567890",
         celular: "cel1234567890",
         photo: "https://waveplusweb.com/myweb/avatar.png"
      }
      await SecureStore.setItemAsync("user", JSON.stringify(response));
      return { status: "success", user: response }
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
   let errors = { email: "", pass: "" };
   if (!form.email || form.email === "") errors.email = "El correo es obligatorio"
   if (!form.pass) errors.pass = "La contraseña es obligatoria";
   return errors;
 };
 