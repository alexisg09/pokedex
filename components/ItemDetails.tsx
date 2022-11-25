import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import style from '../styles/style';
import { Pokemon } from '../types/pokemon';

export interface colorTypeCombo {
  color: string;
  type: string;
}

export const colorTypes: colorTypeCombo[] = [
  { type: 'Plante', color: 'green' },
  { type: 'Feu', color: 'orangered' },
  { type: 'Eau', color: 'cornflowerblue' },
  { type: 'Poison', color: 'darkorchid' },
  { type: 'Fée', color: 'pink' },
  { type: 'Psy', color: 'mediumvioletred' },
  { type: 'Spectre', color: 'darkmagenta' },
  { type: 'Combat', color: 'coral' },
  { type: 'Normal', color: 'gray' },
  { type: 'Électrik', color: 'gold' },
  { type: 'Sol', color: 'moccasin' },
  { type: 'Roche', color: 'brown' },
  { type: 'Acier', color: 'slategray' },
  { type: 'Vol', color: 'lightblue' },
  { type: 'Ténèbres', color: 'darkslategray' },
  { type: 'Dragon', color: 'darkblue' },
  { type: 'Insecte', color: '#9acd32' },
  { type: 'Glace', color: 'deepskyblue' },
];
export const findColorFromType = (typeGiven: string): colorTypeCombo => {
  return colorTypes.find((type) => type.type === typeGiven);
};
export default function PokemonDetails({ route }) {
  const navigation = useNavigation();

  const pokemon: Pokemon = route.params.poke;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: findColorFromType(pokemon.apiTypes[0].name).color,
      },
    });
  }, []);

  return (
    <LinearGradient
      style={styles.detailContainer}
      colors={[
        findColorFromType(pokemon.apiTypes[0].name).color,
        pokemon.apiTypes[1]
          ? findColorFromType(pokemon.apiTypes[1].name).color
          : findColorFromType('Normal').color,
      ]}>
      <Image
        source={{ uri: pokemon.image }}
        style={{ width: 300, height: 300, resizeMode: 'cover' }}
      />
      <Text style={{ fontSize: 30 }}>{pokemon.name}</Text>
      <View style={{ paddingVertical: 15 }}>
        <Image source={{ uri: pokemon.apiTypes[0].image }} style={{ width: 50, height: 50 }} />
        {pokemon.apiTypes[1] && (
          <Image source={{ uri: pokemon.apiTypes[1].image }} style={{ width: 50, height: 50 }} />
        )}
      </View>
      <View style={styles.types}>
        <View style={{ paddingVertical: 15, alignItems: 'center' }}>
          <Text>Ne bronche pas face au(x) type(s) :</Text>
          {pokemon.apiResistances.map(
            (type) =>
              type.damage_relation === 'resistant' && (
                <Text style={styles.textType} key={type.name}>
                  {type.name}
                </Text>
              )
          )}
        </View>
        <View style={{ paddingVertical: 15, alignItems: 'center' }}>
          <Text>Se chie dessus face au(x) type(s) :</Text>
          {pokemon.apiResistances.map(
            (type) =>
              type.damage_relation === 'vulnerable' && (
                <Text style={styles.textType} key={type.name}>
                  {type.name}
                </Text>
              )
          )}
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  textType: {
    fontWeight: style.fontWeight.bold,
  },
  types: {
    backgroundColor: style.colors.whiteTransparent,
    borderRadius: style.radius.double,
    padding: style.spacing.base,
  },
});
