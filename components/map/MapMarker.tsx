import React from 'react'
import MapView from 'react-native-maps';
import CustomMarker, { ScanLocation } from './CustomMarker';

interface MapMarkerProps {
    scanLocations: ScanLocation[]
}

const MapMarker = ({ scanLocations }: MapMarkerProps) => {
    return (
        <MapView
            initialRegion={{
                latitude: 16.88613,  // Correct latitude
                longitude: 97.61678, // Correct longitude
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            mapType='satellite'
        >
            {
                scanLocations.map((scanLocation) => (
                    <CustomMarker
                        {...scanLocation}
                    />
                ))
            }

        </MapView>
    )
}

export default MapMarker