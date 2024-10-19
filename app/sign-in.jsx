import { View, Text } from 'react-native'
import React from 'react'
import App from '../App'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <>
      <Stack.Screen options={{
        headerTitle: "Login",
      }} />
      <App />

    </>
  )
}