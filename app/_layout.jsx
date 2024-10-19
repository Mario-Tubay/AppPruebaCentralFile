import React, { useContext } from 'react'
import SessionProvider from '../context/SessionProvider'
import { Slot, Stack } from 'expo-router'


export default function MainLayout() {
  return (
    <SessionProvider>
      <Stack />
    </SessionProvider>
  )
}