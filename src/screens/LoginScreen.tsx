// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState('');

  console.log('LoginScreen rendered');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witaj</Text>
      <Text style={styles.subtitle}>
        Podaj swój numer telefonu, wyślemy do Ciebie jednorazowy kod autoryzacyjny
      </Text>

      <TextInput
        style={styles.input}
        maxLength={9}
        placeholder="Numer telefonu"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pin')}
      >
        <Text style={styles.buttonText}>Wyślij kod ➤</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Zgubiłeś swój telefon? <Text style={styles.linkInner}>Zablokuj konto</Text></Text>
    </View>
  );

};

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
  linkInner: { color: '#d9534f' },
});

export default LoginScreen;
