import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { VehicleCardProps } from './VehicleCard'

const PunishmentHistoryCard = ({ vehicle }: VehicleCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>ယာဉ်အမှတ်</Text>
                    <Text style={styles.value}>{vehicle?.plate_number}</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>ပြစ်မှု အကြိမ်အရေအတွက်</Text>
                    <Text style={styles.value}>{vehicle?.punishment_count}(ကြိမ်)</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.label}>စုစုပေါင်းပြစ်ဒဏ်ကြေး </Text>
                    <Text style={styles.value}>{vehicle?.punishment_amount} (ကျပ်)</Text>
                </View>
            </View>
        </View>
    )
}

export default PunishmentHistoryCard


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        margin: 4,
        padding: 15,
    },
    detailsContainer: {
        paddingVertical: 10,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        fontFamily: 'NotoSansMyanmar-Bold'
    },
    value: {
        fontSize: 16,
        color: '#555',
        fontFamily: 'NotoSansMyanmar-Regular'
    },
    title: {
        fontSize: 16,
        fontWeight: "400",
        color: "red",
        fontFamily: 'NotoSansMyanmar-Bold'

    },

});

