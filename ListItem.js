import React, { Fragment, useState } from 'react';

import { StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from './api/fetchPokemons';
import logo from './assets/favicon.png'

export default function App() {
  const [enableFetch, setEnableFetch] = useState(false)
  const { data, status, isLoading } = useQuery(["pokemons"], () => fetchPokemons(), { enabled: enableFetch });
  // console.log('data : ', data)
  console.log('status : ', status)
  console.log(data?.results)



  return (
    <ScrollView>
      <Text>Salut la team</Text>
      <TouchableOpacity
        onPress={() => setEnableFetch(true)}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 70, color: '#fff' }}>Zé parti</Text>
      </TouchableOpacity>
      {status && (<Text>{status}</Text>)}

      {status === 'success' && data.results.map((poke) => {
        return (
          <Fragment key={poke.url}>
            <Image source={logo} style={{ width: 50, height: 50 }} />
            <Text style={{ color: 'red' }}>{poke.name}</Text>
            <Text>{poke.url}</Text>
          </Fragment>)

      })
      }
      {/* <StatusBar style="auto" /> */}
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
});
