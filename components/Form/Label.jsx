import { View, Text } from 'react-native'
import React from 'react'

export default function Label({ children, className ="" }) {
  return (
    <Text className={`block mb-2 text-base text-gray-900 dark:text-white font-medium ${className}`}>{children}</Text>
  )
}