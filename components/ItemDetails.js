import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import style from "../styles/style";

export default function PokemonDetails({ route }) {
  const getColorFromType = (type) => {
    switch (type) {
      case "Plante":
        return "darkgreen";
      case "Feu":
        return "crimson";
      case "Eau":
        return "cornflowerblue";
      case "Poison":
        return "darkorchid";
      case "Fée":
        return "pink";
      case "Psy":
        return "mediumvioletred";
      case "Spectre":
        return "darkmagenta";
      case "Combat":
        return "coral";
      case "Normal":
        return "gray";
      case "Électrik":
        return "gold";
      case "Sol":
        return "moccasin";
      case "Roche":
        return "brown";
      case "Acier":
        return "slategray";
      case "Vol":
        return "lightblue";
      case "Ténèbres":
        return "darkslategrey";
      case "Dragon":
        return "darkblue";
      case "Insecte":
        return "#9acd32";
      case "Glace":
        return "deepskyblue";

      default:
        return "white";
    }
  };

  const navigation = useNavigation();

  const pokemon = route.params.poke;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: getColorFromType(pokemon.apiTypes[0].name),
      },
    });
  }, []);

  return (
    <LinearGradient
      style={styles.detailContainer}
      colors={[
        getColorFromType(pokemon.apiTypes[0].name),
        getColorFromType(pokemon.apiTypes[1] ? pokemon.apiTypes[1].name : ""),
      ]}
    >
      <Image
        source={{ uri: pokemon.image }}
        style={{ width: 300, height: 300, resizeMode: 'cover' }}
      />
      <Text style={{ fontSize: 30 }}>{pokemon.name}</Text>
      <View style={{ paddingVertical: 15 }}>
        <Image
          source={{ uri: pokemon.apiTypes[0].image }}
          style={{ width: 50, height: 50 }}
        />
        {pokemon.apiTypes[1] && (
          <Image
            source={{ uri: pokemon.apiTypes[1].image }}
            style={{ width: 50, height: 50 }}
          />
        )}
      </View>
      <View style={{ paddingVertical: 15, alignItems: "center" }}>
        <Text>Ne bronche pas face au(x) type(s) :</Text>
        {pokemon.apiResistances.map(
          (type) =>
            type.damage_relation === "resistant" && (
              <Text style={styles.textType} key={type.name}>
                {type.name}
              </Text>
            )
        )}
      </View>
      <View style={{ paddingVertical: 15, alignItems: "center" }}>
        <Text>Se chie dessus face au(x) type(s) :</Text>
        {pokemon.apiResistances.map(
          (type) =>
            type.damage_relation === "vulnerable" && (
              <Text style={styles.textType} key={type.name}>
                {type.name}
              </Text>
            )
        )}
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: style.colors.gray4,
    color: style.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  textType: {
    fontWeight: style.fontWeight.bold,
  },
});
