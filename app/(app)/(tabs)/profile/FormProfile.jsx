import { View, Text } from 'react-native'
import React from 'react'
import { Input, Label } from '../../../../components'

export default function FormProfile({ form, setForm}) {
   return (
      <>
         <View className="mt-4">
            <Label>Nombre 1</Label>
            <Input value={form?.nombre1} onChangeText={(text) => setForm({ ...form, nombre1: text })} />
         </View>
         <View className="mt-4">
            <Label>Nombre 2</Label>
            <Input value={form?.nombre2} onChangeText={(text) => setForm({ ...form, nombre2: text })} />
         </View>
         <View className="mt-4">
            <Label>Apellido 1</Label>
            <Input value={form?.apellido1} onChangeText={(text) => setForm({ ...form, apellido1: text })} />
         </View>
         <View className="mt-4">
            <Label>Apellido 2</Label>
            <Input value={form?.apellido2} onChangeText={(text) => setForm({ ...form, apellido2: text })} />
         </View>
         <View className="mt-4">
            <Label>Correo</Label>
            <Input value={form?.email} onChangeText={(text) => setForm({ ...form, email: text })} />
         </View>
         <View className="mt-4">
            <Label>Telefono</Label>
            <Input value={form?.telefono} onChangeText={(text) => setForm({ ...form, telefono: text })} />
         </View>
         <View className="mt-4">
            <Label>Celular</Label>
            <Input value={form?.celular} onChangeText={(text) => setForm({ ...form, celular: text })} />
         </View>
         <View className="mt-4">
            <Label>Password</Label>
            <Input secure={true} value={form?.password} onChangeText={(text) => setForm({ ...form, password: text })} />
         </View>
      </>
   )
}