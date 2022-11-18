import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Image,
  RefreshControl,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

import { fetchPokemons } from "../api/fetchPokemons";
import style from "../styles/style";

export default function App() {
  const [enableFetch, setEnableFetch] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data, status, isLoading, isError } = useQuery(
    ["pokemons"],
    () => fetchPokemons(),
    { enabled: enableFetch }
  );
  const [fontsLoaded] = useFonts({
    "Pokemon-Solid": require("../assets/fonts/Pokemon_Solid.ttf"),
    "Pokemon-Hollow": require("../assets/fonts/Pokemon_Hollow.ttf"),
  });
  const navigation = useNavigation();

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      {!enableFetch && fontsLoaded && (
        <TouchableOpacity
          onPress={() => setEnableFetch(true)}
          style={styles.launcher}
        >
          <Text
            style={{
              fontSize: 20,
              color: style.colors.white,
              fontFamily: "Pokemon-Solid",
              textShadowColor: "black",
            }}
          >
            L a n c e r P o k é d e x
          </Text>
        </TouchableOpacity>
      )}

      {isLoading && enableFetch && (
        <View style={styles.loader}>
          <ActivityIndicator size={300} color={style.colors.secondary0} />
        </View>
      )}

      {isError && (
        <View>
          <Text>Erreur... Relance l'app</Text>
          <TouchableOpacity
            onPress={() => setEnableFetch(true)}
            style={styles.launcher}
          >
            <Text
              style={{
                fontSize: 20,
                color: style.colors.white,
                fontFamily: "Pokemon-Solid",
                textShadowColor: "black",
              }}
            >
              R e l a n c e r
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {status === "success" &&
        data !== undefined &&
        data?.map((poke) => {
          return (
            <View key={poke.id} style={styles.container}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Détails", { poke })}
              >
                <Image
                  source={{ uri: poke.image, height: 200, width: 200 }}
                  style={{ alignSelf: "center" }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: style.colors.white,
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {poke.name}
                </Text>
                <Text>{poke.url}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.colors.primary0,
  },
  item: {
    padding: style.spacing.baseLg,
    marginVertical: style.spacing.demi,
    marginHorizontal: style.spacing.base,
  },

  launcher: {
    textAlign: "center",
    backgroundColor: style.colors.pink,
    marginTop: style.percents.p50,
    marginHorizontal: style.percents.p10,
    borderRadius: style.radius.full,
    elevation: style.spacing.demiLG,
    margin: style.spacing.demiLG,
    padding: style.spacing.base,
  },

  loader: {
    marginTop: style.percents.p50,
  },

  listContainer: {
    marginHorizontal: style.percents.p50,
    backgroundColor: style.colors.red,
  },
});
