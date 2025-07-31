import React from 'react';
import { SafeAreaView } from 'react-native';
import Routing from './src/navigation/routing';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routing />
    </SafeAreaView>
  );
}
