import * as SecureStore from 'expo-secure-store';

const guardarContactOffline = async (id, data) => {
   try {
      await SecureStore.setItem(`user_contact_${id}`, JSON.stringify(data))
      return {
         status: "success",
         message: "Contacto guardado correctamente"
      }
   } catch (error) {
      return {
         status: "error",
         message: "Ocurrio un error",
         errorMessage: error.message,
      }
   }
}