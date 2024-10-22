import { View, Modal, Image, ScrollView, Text } from 'react-native'
import React from 'react'
import Label from '../Form/Label';
import Button from './Button';
import { Global } from '../../lib/Globals';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function ModalPerfil({ modalVisible, setModalVisible, item }) {

   if (!item) return

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
         }}>
         <View className={"bg-white px-4  dark:bg-gray-800 items-center justify-center h-[85vh]"}>

            {
               item.foto ? (
                  <Image source={{ uri: `${Global.API_URL}/${item.foto}` }} style={{ width: 150, height: 150, borderRadius: 20 }} />
               ) : <Image style={{ width: 150, height: 150, borderRadius: 200 }} source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }} />
            }
            <View className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2 px-7 py-7">
               <View className="flex-row items-center">
                  <AntDesign name="idcard" size={20} color="black" />
                  <Text className={`block text-base text-gray-900 dark:text-white font-medium ml-4`}>
                     {item.nombre1} {item.nombre2} {item.apellido1} {item.apellido2}
                  </Text>
               </View>
               <View className="flex-row items-center mt-4">
                  <AntDesign name="phone" size={20} color="black" />
                  <Text className={`block text-base text-gray-900 dark:text-white font-medium ml-4`}>
                     {item.telefono}
                  </Text>
                  {/* <Label className="ml-2">{item.telefono}</Label> */}
               </View>
               <View className="flex-row items-center mt-4">
                  <AntDesign name="mail" size={20} color="black" />
                  <Text className={`block text-base text-gray-900 dark:text-white font-medium ml-4`}>
                     {item.email}
                  </Text>
               </View>

               <View className="flex-row items-center mt-4">
                  <MaterialIcons name="phone-iphone" size={20} color="black" />
                  <Text className={`block text-base text-gray-900 dark:text-white font-medium ml-4`}>
                     {item.celular}
                  </Text>
               </View>

            </View>
         </View>

         <View className={"bg-white px-4  dark:bg-gray-800 border-t border-gray-200 py-10"}>
            <Button onPress={() => setModalVisible(!modalVisible)}>
               Cerrar
            </Button>
         </View>
      </Modal>
   )
}