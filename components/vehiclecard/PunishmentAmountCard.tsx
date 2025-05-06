
import { View, StyleSheet, Text, TextInput } from 'react-native'
import Button from '../ui/Button'
import { useState } from 'react';
import { punishmentSchema, PunishmentSchemaType } from '@/schema/punishment.schema';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PunishmentAmountCard = () => {
    const [isFocus, setIsFocus] = useState(false);

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: async (formData: any) => {
            // await clientWithAuth.post("/medicine/create", {
            //     medicine: formData.medicines,
            // });
        },
        onError: (error) => {
            console.error("Error ", error);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["medications"] });
            // router.push("/(tabs)/record/medicine");
        },
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(punishmentSchema),
        defaultValues: {
            id: 0,
            punishment_amount: 0,
            punishment_count: 0
        },
    });

    const handlePunishmentAmount = handleSubmit(async (data: PunishmentSchemaType) => {
        console.log(data)
    });

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>ဒဏ်ကြေးအသစ်ထည့်မည်</Text>
                <View style={{ marginTop: 10, display: "flex", flexDirection: "row", gap: 3 }}>
                    <Controller
                        control={control}
                        name='punishment_amount'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                editable
                                multiline
                                numberOfLines={4}
                                maxLength={40}
                                onChangeText={(text) => {
                                    const numericValue = parseInt(text, 10);
                                    onChange(isNaN(numericValue) ? 0 : numericValue);
                                }}
                                value={value?.toString() ?? ''}
                                keyboardType='numeric'
                                style={[
                                    styles.input,
                                    { flex: 3 },
                                    isFocus && { borderColor: '#003366' }
                                ]}
                            />
                        )}
                    />

                    <Button
                        onPress={handlePunishmentAmount}
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


