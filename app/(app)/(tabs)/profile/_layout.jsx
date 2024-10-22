import { Stack } from 'expo-router';

export default function ProfileLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }} >
            <Stack.Screen name="index" options={{ title: 'Profile' }} />
            <Stack.Screen
                name="borrarcuenta"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="informacion"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="deshabilitarcuenta"
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}