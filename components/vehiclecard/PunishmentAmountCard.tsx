
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Button from '../ui/Button'
import { useState } from 'react';

const PunishmentAmountCard = () => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>ဒဏ်ကြေးအသစ်ထည့်မည်</Text>
                <View style={{ marginTop: 10, display: "flex", flexDirection: "row", gap: 3 }}>
                    <TextInput
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                        value="hello"
                        keyboardType='numeric'
                        style={[
                            styles.input,
                            { flex: 3 },
                            isFocus && { borderColor: '#003366' }
                        ]}
                    />
                    <Button
                        onPress={() => console.log("h")}
                        isLoading={false}
                        containerStyle={{ paddingVertical: 10 }}
                    >
                        <Text style={styles.buttonText}>
                            ထည့်မည်
                        </Text>
                    </Button>
                </View>

            </View>
        </View>
    )
}

export default PunishmentAmountCard

const styles = StyleSheet.create({
    buttonText: {
        color: '#fff', // High contrast for readability
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,

    },
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 8,
        fontSize: 16,
    },

});

