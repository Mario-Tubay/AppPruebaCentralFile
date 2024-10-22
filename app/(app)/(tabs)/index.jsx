
import React, { useEffect, useState } from 'react'
import { CardContact, Container, CardContactEsqueleto, Label, UpdateFile } from '../../../components'
import { Stack } from 'expo-router'
import useSession from '../../../hooks/useSession'
import { deleteContact, getContacts } from '../../../api/user'
import { Alert, FlatList, RefreshControl, Text } from 'react-native'
import NotFoundImage from '../../../components/ui/NotFoundImage'
import ModalPerfil from '../../../components/ui/ModalPerfil'
import * as Network from 'expo-network';

export default function index() {
  const { session } = useSession()

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const allData = async () => {
    const { user } = await session()
    const response = await getContacts(user.id)
    if (response.status === "error") return
    setUsers(response.users)
    setLoading(false)
  }
  const onRefresh = async () => {
    setRefreshing(true);
    await allData();
    setRefreshing(false);
  };

  const verifyAction = async (id) => {
    Alert.alert("Eliminar", "¿Estas seguro de eliminar este contacto?", [
      { text: "Cancelar" },
      { text: "Eliminar", onPress: () => updateContact(id) }
    ])
  }

  const updateContact = async (id) => {
    const { user } = await session()
    if(!user) return Alert.alert("Error", "Ocurrio un error")
    const response = await deleteContact({
      "id_user": user.id,
      "id_usercont": id
    })
    if (response.status === "error") return Alert.alert("Error", response.message)
    Alert.alert("Exito", response.message)
    onRefresh()
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
        headerTitle: "Tus Contactos",
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
            <Container className={"h-screen items-center justify-center gap-4"}>
              <NotFoundImage />
              <Label>No tiene contactos agregados</Label>
            </Container>
          )
        }

        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={users}
          renderItem={({ item }) => <CardContact onPress1={() => profile(item)} onPress2={() => verifyAction(item.id)} key={item.id} item={item} />}
          keyExtractor={item => item.id}
        />

        <ModalPerfil item={selectedUser} modalVisible={modalVisible} setModalVisible={setModalVisible} />


      </Container>
    </>
  )
}