import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { useCurrentLocation } from './useCurrentLocation';

export const useCamera = () => {
    const [uploading, setUploading] = useState(false);
    const { location } = useCurrentLocation();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const openCamera = async () => {
        console.log(location)
        // const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
        // if (cameraPerm.status !== 'granted') {
        //     Alert.alert('Permission needed', 'Camera access is required');
        //     return;
        // }

        // const result = await ImagePicker.launchCameraAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
        //     allowsEditing: true,
        //     quality: 1,
        //     base64: false,
        // });

        // if (!result.canceled && result.assets[0]) {
        //     const asset = result.assets[0];

        //     const formData = new FormData();
        //     formData.append('file', {
        //         uri: asset.uri,
        //         name: 'photo.jpg',
        //         type: 'image/jpeg',
        //     } as any);

        //     // formData.append("")
        //     console.log(location)
        //     try {
        //         setUploading(true);
        //         // const response = await fetch('http://192.168.1.6:8000/upload', {
        //         //     method: 'POST',
        //         //     headers: {
        //         //         'Content-Type': 'multipart/form-data',
        //         //     },
        //         //     body: formData,
        //         // });

        //         // const data = await response.json();
        //         // return data;
        //     } catch (err) {
        //         console.error('Upload Error:', err);
        //         Alert.alert('Upload Failed', 'Could not send the image.');
        //     } finally {
        //         setUploading(false);
        //     }
        // }
    };

    return { openCamera, uploading, hasPermission };
};
