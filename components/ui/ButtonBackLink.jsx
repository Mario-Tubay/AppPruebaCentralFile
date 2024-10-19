import { Text, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonBackLink({children}) {
   return (
      <Pressable className="text-primary flex-row items-center justify-center">
         <>
            <Ionicons name="chevron-back-sharp" size={20} color="#111827" />
            <Text className="text-lg font-semibold ml-3 text-gray-900 dark:text-white">{children}</Text>
         </>
      </Pressable>
   )
}