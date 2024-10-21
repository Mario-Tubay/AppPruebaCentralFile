import { View, Alert } from 'react-native'
import React, { createContext, useState } from 'react'
import { router, Stack } from 'expo-router'
import { Button, Container, Input, Label, UpdateFile } from "../components"
import { registerUser } from '../api/user'
import { pickImage } from '../lib/ProccessImage'

const RegisterContext = createContext()

export default function register() {
    const [verifyImage, setVerifyImage] = useState(false)
    
    const [form, setForm] = useState({
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        email: "",
        telefono: "",
        celular: "",
        password: "",
        foto: ""
    })

    const registrarse = async () => {
        
        const response = await registerUser(form)
        if (response.status === "error") return Alert.alert("Error", response.message)
        setVerifyImage(true)
        Alert.alert("Exito", "Usuario registrado correctamente")
        return router.replace("sign-in")
    }

    const openImage = async () => {
        const result = await pickImage()
        if (result) {
            setForm({ ...form, foto: result })
        }
    }

    return (
        <RegisterContext.Provider value={{form, setForm}}>
            <Stack.Screen options={{ headerTitle: "Registrese" }} />
            <Container type='scroll'>
                <View className="mt-4">
                    <UpdateFile onPress={openImage} selectedImage={form.foto}/>
                </View>

                <View className="mt-4">
                    <Label>Nombre 1</Label>
                    <Input value={form.nombre1} onChangeText={(text) => setForm({ ...form, nombre1: text })} />
                </View>
                <View className="mt-4">
                    <Label>Nombre 2</Label>
                    <Input value={form.nombre2} onChangeText={(text) => setForm({ ...form, nombre2: text })} />
                </View>
                <View className="mt-4">
                    <Label>Apellido 1</Label>
                    <Input value={form.apellido1} onChangeText={(text) => setForm({ ...form, apellido1: text })} />
                </View>
                <View className="mt-4">
                    <Label>Apellido 2</Label>
                    <Input value={form.apellido2} onChangeText={(text) => setForm({ ...form, apellido2: text })} />
                </View>
                <View className="mt-4">
                    <Label>Correo</Label>
                    <Input value={form.email} onChangeText={(text) => setForm({ ...form, email: text })} />
                </View>
                <View className="mt-4">
                    <Label>Telefono</Label>
                    <Input value={form.telefono} onChangeText={(text) => setForm({ ...form, telefono: text })} />
                </View>
                <View className="mt-4">
                    <Label>Celular</Label>
                    <Input value={form.celular} onChangeText={(text) => setForm({ ...form, celular: text })} />
                </View>
                <View className="mt-4">
                    <Label>Password</Label>
                    <Input secure={true} value={form.password} onChangeText={(text) => setForm({ ...form, password: text })} />
                </View>
            </Container>
            <Container className={"py-4 border-t border-gray-200"}>
                <Button onPress={registrarse}>Registrarse</Button>
            </Container>
        </RegisterContext.Provider>
    )
}