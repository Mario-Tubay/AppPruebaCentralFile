import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function SessionProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState("loading")
  return (
    <AuthContext.Provider value={{
        user,
        setUser,
        loading,
        setLoading
    }}>
        {children}
    </AuthContext.Provider>
  )
}