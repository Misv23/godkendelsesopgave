// components/ContactRow.js
// Viser en trykbar række med ikon og tekst

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { palette, spacing } from "../styles/GlobalStyles";

// Props: icon (ikon-komponent), label (tekst), onPress (hvad der sker ved tryk)
export default function ContactRow({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} activeOpacity={0.75}>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.text} numberOfLines={1}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: spacing.md 
  },
  iconWrap: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center", justifyContent: "center",
    marginRight: spacing.md,
  },
  text: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "600", 
    flexShrink: 1 
  },
});
