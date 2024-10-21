import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function CardContactEsqueleto() {
    return (
        <View className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
            <View className=" flex-col items-center py-5">
                <View className="w-20 bg-gray-300 h-20 rounded-full"></View>
                <View className="mt-2 h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-44"></View>
                <View className="mt-2 h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></View>
                <View className="flex-row gap-2">
                    <View className=" h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></View>
                    <View className=" h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></View>
                </View>
            </View>
        </View>
    )
}