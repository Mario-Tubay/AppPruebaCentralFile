import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function register() {
    return (
        <>
            <Stack.Screen options={{
                headerTitle: "Registrese",
            }} />
            <Text>Holis</Text>
        </>
    )
}