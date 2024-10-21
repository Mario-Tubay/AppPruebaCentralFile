import { View, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const UpdateFile = ({ selectedImage = null, onPress }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={{ width: 150, height: 150, borderRadius: 200 }} />
                ) : <Image style={{ width: 150, height: 150, borderRadius: 200 }} source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" }} />
            }
            <Pressable className="bg-blue-400 px-4 py-2 rounded-lg mt-2" onPress={onPress}>
                <MaterialIcons name="add-a-photo" size={24} color="white" />
            </Pressable>
        </View>
    );
};

export default UpdateFile;