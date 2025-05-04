import { Vehicle, } from '@/types/vehicle'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import PunishmentAmountCard from './PunishmentAmountCard';
import PunishmentHistoryCard from './PunishmentHistoryCard';

export interface VehicleCardProps {
    vehicle: Vehicle | null
};
const VehicleCard = ({ vehicle }: VehicleCardProps) => {

    // if (!vehicle) {
    //     return null;
    // }
    return (
        <View>
            <PunishmentHistoryCard vehicle={vehicle} />
            <PunishmentAmountCard />
        </View >

    )
}

export default VehicleCard

const styles = StyleSheet.create({

});

