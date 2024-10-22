import SessionProvider from '../context/SessionProvider'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'


export default function MainLayout() {
  return (
    <SessionProvider>
      <StatusBar style='auto' />
      <Stack />
    </SessionProvider>
  )
}