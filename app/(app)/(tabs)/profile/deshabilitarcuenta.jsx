import React, { useState } from 'react'
import { Container } from '../../../../components'
import { ActivityIndicator, Alert, Pressable, Text } from 'react-native'
import LoadingImage from '../../../../components/ui/LoadingImage'
import { router } from 'expo-router'
import useSession from '../../../../hooks/useSession'
import { deshabilitarAcount } from '../../../../api/user'
import { sessionLogout } from '../../../../api/session'

export default function deshabilitarcuenta() {
   const { session } = useSession()
   const [loading, setLoading] = useState(false)

   const verifyDelete = () => {
      Alert.alert(
         "Eliminar cuenta",
         "¿Estás seguro de deshabilitar su cuenta?",
         [{
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
         }, { text: "Aceptar", onPress: () => deleteAccount() }
         ])
   }

   const deleteAccount = async () => {
      setLoading(true)
      const { user } = await session()
      const response = await deshabilitarAcount({
         id: user.id,
      })
      if (response.status === "error") return Alert.alert("Error", response.message)
      const logout = await sessionLogout()
      setLoading(false)
      if (logout.status === "success") {
         router.replace("/sign-in")
      } else {
         Alert.alert("Error", response.message)
      }
   }
   return (
      <>
         <Container className={" flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700"}>
            <Pressable onPress={() => router.back()} className="py-5 ">
               <Text className="text-red-500 text-base font-bold">Cancelar </Text>
            </Pressable>
            {
               loading ?
                  <ActivityIndicator size="small" color="red" /> :
                  <Pressable onPress={verifyDelete} className="py-5 ">
                     <Text className="text-red-500 text-base font-bold">Deshabilitar</Text>
                  </Pressable>
            }

         </Container>
         <Container className={" flex-col justify-center items-center h-[80vh]"}>
            {/* <DeleteImage width={550} /> */}
            <LoadingImage width={700} />
            <Text className="text-gray-400 dark:text-white font-medium text-xl text-center mt-6">Tu cuenta sera deshabilitada</Text>
            <Text className="text-gray-400 dark:text-white font-medium text-base text-center mt-2">No sera visible para otros usuarios</Text>
            <Text className="text-gray-400 dark:text-white font-medium text-base text-center mt-2">Puedes regresar si inicias session nuevamente</Text>
         </Container>
      </>

   )
}
