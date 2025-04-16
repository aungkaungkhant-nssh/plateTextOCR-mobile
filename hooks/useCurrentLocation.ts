import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export function useCurrentLocation() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            try {
                let loc = await Location.getCurrentPositionAsync({});
                setLocation(loc);
            } catch (err) {
                setErrorMsg('Failed to get location');
                console.error(err);
            }
        })();
    }, []);

    return { location, errorMsg };
}
