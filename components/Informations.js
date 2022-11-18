import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import style from "../styles/style";

const Informations = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.item}>Informations page</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.colors.primary0,
  },
  item: {
    paddingTop: style.spacing.demiLG,
    display: "flex",
    alignSelf: "center",
    color: style.colors.white,
  },
});

export default Informations;
