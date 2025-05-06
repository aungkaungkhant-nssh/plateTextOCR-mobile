import React from 'react'
import { TouchableOpacity, StyleSheet, View, StyleProp, ActivityIndicator } from 'react-native'
import { TextStyle, ViewStyle, } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface ButtonProps {
    onPress: () => void,
    isLoading: boolean,
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
const Button = ({
    onPress,
    isLoading,
    containerStyle,
    children,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                isLoading && styles.buttonDisabled,
                containerStyle,
            ]}
            onPress={onPress}
            disabled={isLoading}
        >
            <View style={styles.container}>
                {
                    isLoading && (
                        <ActivityIndicator size="small" color="#fff" />
                    )
                }
                {children}
            </View>

            {/* {isLoading ? (
                
            ) : children ? (
                children
            ) : (
                title && <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )} */}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#003366',
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonDisabled: {
        backgroundColor: '#335577',
    },
    container: {
        display: "flex",
        flexDirection: "row",
        gap: 4
    }

});



