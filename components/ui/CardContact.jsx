import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function CardContact() {
    return (
        <View className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
            <View className=" flex-col items-center py-5">
                <View className="w-20 bg-gray-500 h-20 rounded-full"></View>
                <Text className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mario Tubay</Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2">mario@mail.com</Text>
                <View className="flex-row gap-2">
                    <Pressable className="inline-flex items-center px-4 py-2 bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:focus:ring-primary" >
                        <Text className="text-white text-sm font-bold text-center">Ver perfil</Text>
                    </Pressable>
                    <Pressable className="inline-flex items-center px-4 py-2 rounded-lg border border-red-500" >
                        <Text className="text-red-500 text-sm font-bold text-center">Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}