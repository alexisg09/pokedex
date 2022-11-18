import React from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Informations = () => {
  return (
    <ScrollView>
      <Text>Informations page</Text>

      <StatusBar style="auto" />
    </ScrollView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});




export default Informations;