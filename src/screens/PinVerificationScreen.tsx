import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PinVerificationScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Krok 2</Text>
            <Text style={styles.subtitle}>
                Wpisz kod autoryzacyjny wysłany 2025-07-29 15:24:28
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Wpisz jednorazowy kod"
                keyboardType="number-pad"
                value={code}
                onChangeText={setCode}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Aktywuj ➤</Text>
            </TouchableOpacity>

            <Text style={styles.link}><Text style={styles.linkInner}>Wyślij kod ponownie</Text> | <Text style={styles.linkInner}>Zmień numer telefonu</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 16, color: '#444', marginBottom: 20 },
    input: {
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    link: { textAlign: 'center', color: '#444' },
    linkInner: { color: '#0055cc' },
});

export default PinVerificationScreen;