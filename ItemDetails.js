import React from 'react';

import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function ItemDetails({ route }) {

  const getColorFromType = (type) => {

    switch (type) {
      case "Plante":
        return 'darkgreen';
        break;
      case "Feu":
        return 'crimson';
        break;
      case "Eau":
        return 'cornflowerblue';
        break;
      case "Poison":
        return 'darkorchid';
        break;
      case "Fée":
        return 'pink';
        break;
      case "Psy":
        return 'magenta';
        break;
      case "spectre":
        return "darkmagenta";
        break;
      case "Combat":
        return 'coral';
        break;
      case "Normal":
        return 'gray';
        break;
      case "Électrik":
        return 'gold';
        break;
      case "Sol":
        return "moccasin";
        break;
      case "Roche":
        return "brown";
        break;
      case "Acier":
        return "slategray";
        break;
      case "Vol":
        return "lightblue";
        break;

      default:
        return 'white';

    }
  }

  const pokemon = route.params.poke

  return (
    <LinearGradient style={styles.detailContainer}
      colors={[getColorFromType(pokemon.apiTypes[0].name), getColorFromType(pokemon.apiTypes[1] ? pokemon.apiTypes[1].name : "")]}>
      <Image source={{ uri: pokemon.image }} style={{ width: 400, height: 400 }} />
      <Text style={{ fontSize: 30 }}>{pokemon.name}</Text>
      <View>
        <Image source={{ uri: pokemon.apiTypes[0].image }} style={{ width: 50, height: 50 }} />
        {
          pokemon.apiTypes[1] && (
            <Image source={{ uri: pokemon.apiTypes[1].image }} style={{ width: 50, height: 50 }} />
          )
        }
      </View>
      <StatusBar style="auto" />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    color: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
