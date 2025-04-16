import React from 'react';
import { Marker } from 'react-native-maps';

export interface ScanLocation {
    id: string;
    plate: string;
    scannedAt: string;
    location: {
        latitude: number;
        longitude: number;
    };
}

const CustomMarker = ({ plate, scannedAt, location: { latitude, longitude } }: ScanLocation) => {
    return (
        <Marker
            coordinate={{
                latitude,
                longitude
                // latitude: 16.88613,  // Correct latitude
                // longitude: 97.61678, // Correct longitude
            }}
            title={plate}
            description={scannedAt}
        />
    )
}

export default CustomMarker;


