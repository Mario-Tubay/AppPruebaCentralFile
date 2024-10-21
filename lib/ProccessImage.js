import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        Alert.alert('Se necesita permiso para acceder al album');
        return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    if (!result.canceled) {
        return result.assets[0].uri
    } 

    return
};