import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../../../../components'
import DeleteImage from '../../../../components/ui/DeleteImage'
import useSession from '../../../../hooks/useSession'
import { deleteUserPermant } from '../../../../api/user'
import { sessionLogout } from '../../../../api/session'
import { router } from 'expo-router'

export default function borrarcuenta() {
   const { session } = useSession()
   const [loading, setLoading] = useState(true)

   const verifyDelete = () => {
      Alert.alert(
         "Eliminar cuenta",
         "¿Estás seguro de eliminar tu cuenta?",
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
      const response = await deleteUserPermant({
         id_user: user.id,
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
                     <Text className="text-red-500 text-base font-bold">Eliminar</Text>
                  </Pressable>
            }
         </Container>
         <Container className={" flex-col justify-center items-center h-[80vh]"}>
            <DeleteImage width={550} />
            <Text className="font-medium text-gray-400 dark:text-white text-xl text-center mt-6">Tu cuenta sera</Text>
            <Text className="font-medium text-gray-400 dark:text-white text-xl text-center mt-2">eliminara permanentemente</Text>
         </Container>
      </>
   )
}