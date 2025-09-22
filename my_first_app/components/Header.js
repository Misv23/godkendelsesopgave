// components/Header.js
// Viser appens header med logo og tekst

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { palette, spacing } from "../styles/GlobalStyles";

export default function Header() {
  return (
    <View style={styles.wrap}>
      {/* Logo-billede */}
      <Image source={require("../assets/absalon.png")} style={styles.logo} />
      {/* Tekst ved siden af logo */}
      <Text style={styles.text}>PROFESSIONSHØJSKOLEN ABSALON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", padding: spacing.md },
  logo: { width: 110, height: 34, resizeMode: "contain" },
  text: { marginLeft: spacing.sm, color: palette.text, fontWeight: "600" },
});
