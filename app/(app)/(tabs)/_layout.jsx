import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#77B1D0' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) =><AntDesign name="home" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="adduser"
        options={{
          title: 'Agregar Usuario',
          tabBarIcon: ({ color }) => <AntDesign name="adduser" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
