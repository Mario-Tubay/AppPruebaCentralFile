import { StatusBar } from 'expo-status-bar';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Input, Label, Button } from './components';
import LoginImage from './components/ui/LoginImage';
import { useState } from 'react';
import { session, validateForm } from './api/session';
import { Link, router, Stack } from 'expo-router';
export default function App() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '', pass: ''
  })
  const [formError, setFormError] = useState({
    email: '', pass: ''
  })
  const onLogin = async () => {
    setLoading(true)
    if (Object.values(validateForm(form)).some(value => value.trim() != '')) {
      setFormError(validateForm(form))
      return setLoading(false)
    } else {
      setFormError({ email: '', pass: '' })
    }
    const response = await session(form)
    setLoading(false)
    if (response.status === "error") return Alert.alert("Error", response.message)

    router.replace("/")
  }
  return (

    <View className="max-w-[440px] max-h-[950px] flex-1 justify-between bg-white px-4 h-screen dark:bg-gray-800">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="auto" />
      <View className="items-center justify-center h-auto pt-24">
        <LoginImage width={500} />
        <Label className='mt-4'>Iniciar Sesión</Label>
      </View>
      <View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View className="mb-5">
            <Label>Correo electrónico</Label>
            <Input error={formError.email} value={form.email} onChangeText={(text) => setForm({ ...form, email: text })} />
          </View>
          <View className="mb-5">
            <Label>Contraseña</Label>
            <Input error={formError.pass} secure={true} value={form.pass} onChangeText={(text) => setForm({ ...form, pass: text })} />
          </View>
        </KeyboardAvoidingView>
        <View className="my-5">
          <Button loading={loading} onPress={onLogin}>
            Iniciar Sesión
          </Button>
        </View>
      </View>
      <View className="flex items-center mb-12 flex-row justify-center py-5 border-t border-gray-300">
        <Label className='font-light' >No tienes una cuenta? </Label>
        <Link asChild href="/register">
          <Text className="mb-2 text-base text-cyan-400">Registrarse</Text>
        </Link>
      </View>
    </View>
  )
}
