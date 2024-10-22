import { Alert, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Container, Label, UpdateFile } from '../../../../components'
import { sessionLogout } from '../../../../api/session'
import { Link, router } from 'expo-router'
import useSession from '../../../../hooks/useSession'
import { Global } from '../../../../lib/Globals'
import { pickImage } from '../../../../lib/ProccessImage'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { updatePhotProfile } from '../../../../api/user'

export default function index() {
  const { session } = useSession()
  const [user, setUser] = useState(null)
  const [foto, setFoto] = useState(null)
  const [loadData, setLoadData] = useState()

  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const cerrarSession = async () => {
    setLoading(true)
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de cerrar sesión?",
      [{
        text: "Cancelar",
        onPress: () => setLoading(false),
        style: "cancel"
      }, { text: "Aceptar", onPress: () => logoutSession() }
      ]
    );
    setLoading(false)
  }
  const logoutSession = async () => {
    const response = await sessionLogout()
    if (response.status === "success") {
      router.replace("/sign-in")
    } else {
      Alert.alert("Error", response.message)
    }
  }

  const openImage = async () => {
    const result = await pickImage()
    if (result) {
      setUser({ ...user, foto: result })
      setFoto(result)
    }
  }

  const updatePhoto = async () => {
    setLoading(true)
    const response = await updatePhotProfile({
      foto: foto,
      id_user: user?.id
    })
    if (response.status === "success") {
      Alert.alert("Éxito", response.message)
    } else {
      Alert.alert("Error", response.message)
    }
    setLoading(false)
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await getUser()
    setRefreshing(false);
  };

  const getUser = async () => {
    setLoadData(true)
    const { user } = await session()
    setUser({ ...user, foto: Global.API_URL + "/" + user?.foto })
    setLoadData(false)
  }

  useEffect(() => {
    getUser()
  }, [])


  useEffect(() => {
    if (!foto) return
    updatePhoto()
  }, [foto])

  return (
    <>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      >
        <Container className={"h-[72vh]"}>
          {
            loadData ?
              <View className="items-center justify-center">
                <View className=" h-40 bg-gray-200 rounded-full dark:bg-gray-700 w-40"></View>
                <View className=" h-9 bg-gray-200 rounded-lg dark:bg-gray-700 w-12"></View>

              </View>
              : <UpdateFile onPress={openImage} selectedImage={`${foto ? foto : user?.foto}`} />
          }
          <View className='mt-4 items-center' >
            {
              loadData ?
                <View className="mt-2 h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></View>
                : <Text className={`block mb-2 text-xl text-gray-900 dark:text-white font-bold `}>
                  {user?.nombre1} {user?.apellido1}
                </Text>

            }

          </View>

          <View className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link asChild href={"/profile/informacion"}>
              <Pressable className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row">
                <Ionicons name="information-circle-outline" size={22} color="black" />
                <Text className="ml-3 text-base font-medium tracking-tight text-gray-900 dark:text-white">Tu información</Text>
              </Pressable>
            </Link>
            <Link asChild href={"/profile/deshabilitarcuenta"}>
              <Pressable className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row">
                <AntDesign name="deleteuser" size={22} color="red" />
                <Text className="ml-3 text-base font-medium tracking-tight text-red-500 ">Deshabilitar cuenta</Text>
              </Pressable>
            </Link>
            <Link asChild href={"/profile/borrarcuenta"}>
              <Pressable className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row">
                <AntDesign name="delete" size={22} color="red" />
                <Text className="ml-3 text-base font-medium tracking-tight text-red-500 ">Borrar cuenta</Text>
              </Pressable>
            </Link>
          </View>
        </Container>

      </ScrollView>

      <Container className={'border-t border-gray-200 py-3'}>
        <Button onPress={cerrarSession} classText='text-red-600 text-center' type='danger'>Cerrar sesión</Button>
      </Container>
    </>
  )
}