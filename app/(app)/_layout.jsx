import { View, Text } from 'react-native'
import React from 'react'
import useSession from '../../hooks/useSession'
import { sessionLogout } from '../../api/session'
import { Button } from '../../components'
import { Redirect, Stack } from 'expo-router'
import { PageLoading } from '../../components'

export default function AppLayout() {

    const { isLoading } = useSession()

    if (isLoading === "loading") return <PageLoading />


    if (isLoading === "unauthenticated") {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )


}