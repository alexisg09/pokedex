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

      case "Insecte":
        return "#9acd32"

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
      <View style={{ paddingVertical: 15 }}>
        <Image source={{ uri: pokemon.apiTypes[0].image }} style={{ width: 50, height: 50 }} />
        {
          pokemon.apiTypes[1] && (
            <Image source={{ uri: pokemon.apiTypes[1].image }} style={{ width: 50, height: 50 }} />
          )
        }
      </View>
      <View style={{ paddingVertical: 15, alignItems: 'center' }}>
        <Text>Ne bronche pas face au(x) type(s) :</Text>
        {
          pokemon.apiResistances.map((type) => type.damage_relation === 'resistant' && (
            <Text style={styles.textType} key={type.name}>{type.name}</Text>
          ))


        }
      </View>
      <View style={{ paddingVertical: 15, alignItems: 'center' }}>
        <Text>Se chie dessus face au(x) type(s) :</Text>
        {
          pokemon.apiResistances.map((type) => type.damage_relation === 'vulnerable' && (
            <Text style={styles.textType} key={type.name}>{type.name}</Text>
          ))


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
  textType: {
    fontWeight: 'bold',
  }
});
