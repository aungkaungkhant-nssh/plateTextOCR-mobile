import React from 'react'
import { TouchableOpacity, StyleSheet, ActivityIndicator, Text } from 'react-native'

interface ButtonProps {
    title: string,
    onPress: () => void,
    isLoading: boolean,
}
const Button = ({ title, onPress, isLoading }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={onPress}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#003366',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonDisabled: {
        backgroundColor: '#335577',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },

});



