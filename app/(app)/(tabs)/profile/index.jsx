import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Container } from '../../../../components'
import { sessionLogout } from '../../../../api/session'
import { router } from 'expo-router'

export default function index() {


  const [loafing, setLoading] = useState()
  const cerrarSession = async () =>{
    setLoading(true)
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de cerrar sesión?",
      [{
          text: "Cancelar",
          onPress: () => setLoading(false),
          style: "cancel"
        },{ text: "Aceptar", onPress: () => logoutSession() }
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
  return (
    <>
      <Container type='scroll'>
      </Container>
      <Container className={'border-t border-gray-200 py-3'}>
          <Button onPress={cerrarSession} classText='text-red-600 text-center' type='danger'>Cerrar sesión</Button>
      </Container>
    </>
  )
}