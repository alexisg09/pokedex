import { StyleSheet, Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from './api/fetchPokemons';
import logo from './assets/favicon.png'

export default function App() {
  const { data, status, isLoading } = useQuery(["pokemons"], () => fetchPokemons());
  // console.log('data : ', data)
  console.log('status : ', status)
  console.log(data?.results)

  return (
    <View styles={styles.container}>
      <Text>Salut la team</Text>
      {isLoading ? (<Text>Loading</Text>) : data.results !== undefined && data.results.map((poke) => {
        <>
          <Image source={logo} style={{ width: 50, height: 50 }} />
          <Text>{poke.name}</Text>
          <Text>{poke.url}</Text>
          <Text>success</Text>
        </>
      })
      }
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
