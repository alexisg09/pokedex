import React, { Fragment, useState } from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from './api/fetchPokemons';
import logo from './assets/favicon.png'
import { Link } from '@react-navigation/native';


export default function App() {
  const [enableFetch, setEnableFetch] = useState(false)
  const { data, status, isLoading } = useQuery(["pokemons"], () => fetchPokemons(), { enabled: enableFetch });


  return (
    <ScrollView>
      <Text>Salut la team</Text>
      <TouchableOpacity
        onPress={() => setEnableFetch(true)}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 70, color: '#fff', textAlign: "center" }}>Zé parti</Text>
      </TouchableOpacity>

      {status === 'success' && data !== undefined && data?.map((poke) => {
        return (
          <Fragment key={poke.id}>
            <View style={{ display: "flex", alignContent: 'center', justifyContent: 'center' }}>
              <TouchableOpacity>
                <Link to={{ screen: 'Détails', params: { poke: poke } }}>
                  <Image source={{ uri: poke.image }} style={{ width: 150, height: 150 }} />
                  <Text style={{ color: 'red' }}>{poke.name}</Text>
                  <Text>{poke.url}</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </Fragment>)

      })
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
