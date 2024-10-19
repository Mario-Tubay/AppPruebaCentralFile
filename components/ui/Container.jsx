import { View, ScrollView } from 'react-native'
import React from 'react'

export default function Container({children, className, type="normal"}) {
   const classDefect = "bg-white px-4  dark:bg-gray-800"
   if(type === "scroll"){
      return (
         <ScrollView className={`${classDefect} ${className}`}>
            {children}
         </ScrollView>
      )
   }

  return (
   <View className={`${classDefect} ${className}`}>
      {children}
   </View>
  )
}