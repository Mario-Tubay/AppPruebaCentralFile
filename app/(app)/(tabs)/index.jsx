
import React, { useEffect, useState } from 'react'
import { CardContact, Container, CardContactEsqueleto, Label, UpdateFile } from '../../../components'
import { Stack } from 'expo-router'
import useSession from '../../../hooks/useSession'
import { getContacts } from '../../../api/user'
import { FlatList, RefreshControl, Text } from 'react-native'
import NotFoundImage from '../../../components/ui/NotFoundImage'

export default function index() {
  const { session } = useSession()

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

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
      {/* <UpdateFile /> */}
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
          renderItem={({ item }) => <CardContact key={item.id} item={item} />}
          keyExtractor={item => item.id}
        />

      </Container>
    </>
  )
}