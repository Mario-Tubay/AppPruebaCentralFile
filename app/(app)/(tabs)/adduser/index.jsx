
import React, { useEffect, useState } from 'react'
import { CardContact, Container, CardContactEsqueleto, Label, Button } from '../../../../components'
import { router, Stack } from 'expo-router'
import { Alert, FlatList, Modal, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native'
import useSession from '../../../../hooks/useSession'
import { addUserContact, getNotContact } from '../../../../api/user'
import NotFoundImage from '../../../../components/ui/NotFoundImage'
import ModalPerfil from '../../../../components/ui/ModalPerfil'

export default function index() {
  const { session } = useSession()
  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const allData = async () => {
    const { user } = await session()
    const response = await getNotContact(user.id)
    if (response.status === "error") return
    setUsers(response.users)
    setLoading(false)
  }
  const onRefresh = async () => {
    setRefreshing(true);
    await allData();
    setRefreshing(false);
  }

  const addUser = async (id_user) => {
    const { user } = await session()
    const response = await addUserContact({
      "id_user": user.id,
      "id_usercont": id_user
    })

    if (response.status === "error") return Alert.alert("Error", response.message)
    Alert.alert("Exito", response.message)
    await onRefresh()

  }

  const profile = (item) => {
    setModalVisible(true)
    setSelectedUser(item)
  }
  useEffect(() => {
    setLoading(true)
    allData()
  }, [])
  return (
    <>
      <Stack.Screen options={{
        headerTitleAlign: "left",
        headerTitle: "Agregar Contactos",
      }} />
      <Container className={"h-[79vh]"}>
        {
          loading && (
            <>
              <CardContactEsqueleto />
              <CardContactEsqueleto />
              <CardContactEsqueleto />
            </>
          )
        }
        {
          users.length === 0 && !loading && (
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <View className={"h-[75vh] items-center justify-center gap-4 bg-white px-4  dark:bg-gray-800"}>
                <NotFoundImage />
                <Label>No existe contactos para agregar</Label>
              </View>

            </ScrollView>
          )
        }

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={users}
          renderItem={({ item }) => <CardContact onPress1={() => addUser(item.id)} onPress2={()=>profile(item)} type='add' key={item.id} item={item} />}
          keyExtractor={item => item.id}
        />

       <ModalPerfil item={selectedUser} modalVisible={modalVisible} setModalVisible={setModalVisible} />

      </Container>
    </>
  )
}