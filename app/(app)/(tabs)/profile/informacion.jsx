import { View, Text, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from '../../../../components'
import { router } from 'expo-router'
import FormProfile from './FormProfile'
import useSession from '../../../../hooks/useSession'
import LoadingForm from '../../../../components/Form/LoadingForm'
import { updateUser } from '../../../../api/user'

export default function informacion() {
  const { session } = useSession()
  const [form, setForm] = useState()
  const [loadingForm, setLoadingForm] = useState(true)

  const update = async () => {
    const response = await updateUser(form)
    console.log(response)
    if (response.status === "success") {
      Alert.alert("Éxito", response.message)
    } else {
      Alert.alert("Error", response.message)
    }
  }


  useEffect(() => {
    const getUser = async () => {
      const { user } = await session()
      setForm(user)
      setLoadingForm(false)
    }
    getUser()
  }, [])
  return (
    <>
      <Container className={" flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700"}>
        <Pressable onPress={() => router.back()} className="py-5 ">
          <Text className="text-red-500 text-base font-bold">Cancelar </Text>
        </Pressable>
        <Pressable onPress={update} className="py-5 ">
          <Text className="text-primary text-base font-bold">Actualizar </Text>
        </Pressable>
      </Container>
      <Container type='scroll' >
        {
          loadingForm ? <LoadingForm />
            : <FormProfile form={form} setForm={setForm} />
        }


      </Container>
    </>
  )
}