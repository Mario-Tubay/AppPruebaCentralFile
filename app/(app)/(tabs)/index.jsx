
import React from 'react'
import { CardContact, Container } from '../../../components'
import { Stack } from 'expo-router'

export default function index() {

  return (
    <>
      <Stack.Screen options={{
        headerTitleAlign: "left",
        headerTitle: "Tus Contactos",
      }} />
      <Container type='scroll'>
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />
        <CardContact />

      </Container>
    </>
  )
}