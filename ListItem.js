import React, { Fragment, useState } from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from './api/fetchPokemons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';



export default function App() {
  const [enableFetch, setEnableFetch] = useState(false)
  const { data, status, isLoading, isError } = useQuery(["pokemons"], () => fetchPokemons(), { enabled: enableFetch });
  const [fontsLoaded] = useFonts({
    'Pokemon-Solid': require('./assets/fonts/Pokemon_Solid.ttf'),
    'Pokemon-Hollow': require('./assets/fonts/Pokemon_Hollow.ttf')
  });
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      {!enableFetch && fontsLoaded && (
        <TouchableOpacity
          onPress={() => setEnableFetch(true)}
          style={styles.launcher}>
          <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Pokemon-Solid', textShadowColor: 'black' }}>L a n c e r  P o k é d e x</Text>
        </TouchableOpacity>
      )}


      {isLoading && enableFetch && (
        <View style={styles.loader}>
          <ActivityIndicator size={300} color="#FF4B4B" />
        </View>
      )}

      {isError && (
        <View>
          <Text>Erreur... Relance l'app</Text>
          <TouchableOpacity
            onPress={() => setEnableFetch(true)}
            style={styles.launcher}>
            <Text style={{ fontSize: 20, color: '#fff', fontFamily: 'Pokemon-Solid', textShadowColor: 'black' }}>R e l a n c e r</Text>
          </TouchableOpacity>
        </View>
      )}

      {status === 'success' && data !== undefined && data?.map((poke) => {
        return (
          <View key={poke.id} style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Détails', { poke: poke })}>
              <Image source={{ uri: poke.image, height: 200, width: 200 }} style={{ alignSelf: 'center' }} resizeMode="contain" />
              <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>{poke.name}</Text>
              <Text>{poke.url}</Text>
            </TouchableOpacity>
          </View>)

      })
      }
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  launcher: {
    textAlign: 'center',
    backgroundColor: 'pink',
    marginTop: '50%',
    marginHorizontal: '10%',
    borderRadius: 100,
    elevation: 10,
    margin: 10,
    padding: 15
  },

  loader: {
    marginTop: '50%'
  },

  listContainer: {
    marginHorizontal: '50%',
    backgroundColor: 'red'
  }

});
