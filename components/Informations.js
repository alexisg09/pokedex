import React from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Informations = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.item}>Informations page</Text>
      <StatusBar style="auto" />
    </ScrollView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31375b',
  },
  item: {
    paddingTop: 40,
    display: 'flex',
    alignSelf: 'center',
    color: "#ffffff",

  },
});




export default Informations;