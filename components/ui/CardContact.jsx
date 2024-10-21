import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Global } from '../../lib/Globals';

export default function CardContact({ item, type = "view", onPress1, onPress2 }) {
    const [press, setPress] = useState(false)
    const [press2, setPress2] = useState(false)
    return (
        <View className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
            <View className=" flex-col items-center py-5">
            {
                item.foto ? (
                    <Image source={{ uri: Global.API_URL+"/"+item.foto }} style={{ width: 150, height: 150, borderRadius: 200 }} />
                ) : <Image style={{ width: 150, height: 150, borderRadius: 200 }} source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }} />
            }
                <Text className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.nombre1} {item.apellido1}</Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.email}</Text>
                <View className="flex-row gap-2">
                    {
                        type === "view" ? (
                            <>
                                <Pressable onPressIn={() => setPress(true)} onPressOut={() => setPress(false)} className={`${press && 'opacity-50'} inline-flex items-center px-4 py-2 bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:focus:ring-primary`}>
                                    <Text className="text-white text-sm font-bold text-center">Ver perfil</Text>
                                </Pressable>
                                <Pressable onPressIn={() => setPress2(true)} onPressOut={() => setPress2(false)} className={`${press2 && 'opacity-50 bg-red-500 '} inline-flex items-center px-4 py-2 rounded-lg border border-red-500`}>
                                    <Text className={`${press2 ? "text-white" : "text-red-500"} text-sm font-bold text-center`}>Eliminar</Text>
                                </Pressable>
                            </>
                        ) : type === "add" && (
                            <>
                                <Pressable onPress={onPress1} onPressIn={() => setPress(true)} onPressOut={() => setPress(false)} className={`${press && 'opacity-50'} inline-flex items-center px-4 py-2 bg-green-200 rounded-lg focus:ring-4 focus:outline-none focus:ring-greenbg-green-200 dark:bg-green-200 dark:focus:ring-greenbg-green-200`}>
                                    <View className="flex-row gap-1">
                                        <AntDesign name="adduser" size={18} color={"#065F46"} />
                                        <Text className="text-green-800 text-sm font-bold text-center">Agregar</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={onPress2} onPressIn={() => setPress2(true)} onPressOut={() => setPress2(false)} className={`${press2 && 'opacity-50 bg-primary '} inline-flex items-center px-4 py-2 rounded-lg border border-primary`}>
                                    <Text className={`${press2 ? "text-white" : "text-primary"} text-sm font-bold text-center`}>Ver Perfil</Text>
                                </Pressable>
                            </>
                        )

                    }

                </View>
            </View>
        </View>

    )
}