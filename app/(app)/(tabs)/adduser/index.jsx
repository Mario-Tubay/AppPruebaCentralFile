import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../../../../components'
import { Stack } from 'expo-router'
export default function index() {
  return (
    <>
     <Stack.Screen options={{
        headerTitleAlign: "left",
        headerTitle: "Tus Contactos",
      }} />
      <Container>
        <Text>Holis </Text>
      </Container>
    </>

  )
}