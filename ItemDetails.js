import React, { Fragment, useState } from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from './api/fetchPokemons';
import logo from './assets/favicon.png'

export default function ItemDetails({ route }) {

  const pokemon = route.params.poke
  return (
    <ScrollView>
      <Text>Item details page</Text>
      <Image source={{ uri: pokemon.image }} style={{ width: 150, height: 150 }} />
      <Text>Nom : {pokemon.name}</Text>
      <Text>Type 1 : {pokemon.apiTypes[0].name}</Text>
      <Image source={{ uri: pokemon.apiTypes[0].image }} style={{ width: 50, height: 50 }} />

      {
        pokemon.apiTypes[1] && (
          <View>
            <Text>Type 2 : {pokemon.apiTypes[1].name}</Text>
            <Image source={{ uri: pokemon.apiTypes[1].image }} style={{ width: 50, height: 50 }} />
          </View>
        )
      }
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
