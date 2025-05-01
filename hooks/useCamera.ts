import axios from 'axios';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { postMultipart } from '@/utils/apiClient';
import { Vehicle } from '@/types/vehicle';

export const useCamera = () => {
    const [uploading, setUploading] = useState(false);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);



    const openCamera = async () => {
        const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraPerm.status !== 'granted') {
            Alert.alert('Permission needed', 'Camera access is required');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.5,
            base64: false,
        });


        if (!result.canceled && result.assets[0]) {
            const asset = result.assets[0];


            // Extract filename and type properly
            const fileName = asset.uri.split('/').pop() || 'photo.jpg';
            const fileType = asset.mimeType || 'image/jpeg';

            const formData = new FormData();
            formData.append('file', {
                uri: asset.uri,
                name: fileName,
                type: fileType,
            } as any); // Type casting needed for React Native

            try {
                setUploading(true);
                const result = await postMultipart("/vehicles", formData);
                setVehicle(result);
                // // {"id": 40, "plate_number": "3 For FAME 4 Urocrush Stones Renal Capbules ) 00"}

            } catch (err) {
                // Improved error logging
                if (axios.isAxiosError(err)) {
                    console.error('Upload Error:', err.response?.data);
                    Alert.alert('Error', err.response?.data?.detail || 'Upload failed');
                }
                // ... rest of error handling ...
            } finally {
                setUploading(false)
            }
        }
    };


    return { openCamera, uploading, hasPermission, vehicle };
};
