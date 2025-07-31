import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forweb s.c.</Text>
      <Text style={styles.title}>Podsumowanie usług podstawowych</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Internet</Text>
        <Text style={styles.data}>3.38GB / 30GB</Text>
        <Text style={styles.label}>Czas połączeń</Text>
        <Text style={styles.data}>63 min 26 sek</Text>
        <Text style={styles.label}>Wiadomości SMS i MMS</Text>
        <Text style={styles.data}>7</Text>
        <Text style={styles.sub}>Pakiet zostanie odnowiony za 2 dni</Text>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.orangeBtn}><Text style={styles.orangeBtnText}>Dokup 10GB za 20 zł</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeBtn}><Text style={styles.orangeBtnText}>Dokup 2GB za 7 zł</Text></TouchableOpacity>
        <Text style={styles.boxButton}>Aktywne pakiety dodatkowe</Text>
        <Text style={styles.boxButton}>Ustawienia podstawowe</Text>
        <Text style={styles.boxButton}>Ustawienia przekierowań</Text>
        <Text style={styles.boxButton}>Pomoc techniczna</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { borderRadius: 10, fontSize: 18, fontWeight: 'bold', color: '#fff', backgroundColor: '#1a73e8', padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#f4f4f4', borderRadius: 10, borderWidth: 0.5, borderColor: '#adadadff', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold' },
  data: { fontSize: 16, color: '#007bff', marginVertical: 5 },
  sub: { fontSize: 14, color: '#666' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  orangeBtn: { width: '48%', height: '48%', backgroundColor: '#ff6600', padding: 12, borderRadius: 8,  marginVertical: 5 },
  orangeBtnText: { color: '#fff', textAlign: 'center', fontSize: 14 },
  boxContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  boxLabel: {
    width: '48%',
    height: '48%',
    backgroundColor: '#ffffffff',
    color: '#0a0000ff',
    fontSize: 14,
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  boxButton: {
    width: '48%',
    height: '48%',
    backgroundColor: '#102445',
    color: '#fff',
    fontSize: 14,
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default HomeScreen