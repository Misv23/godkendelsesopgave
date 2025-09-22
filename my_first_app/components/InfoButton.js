// components/InfoButton.js
// En trykbar knap med tekst og evt. ikon

import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { palette, spacing } from "../styles/GlobalStyles";

export default function InfoButton({ label, icon }) {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      {/* Hvis der er et ikon, vis det foran teksten */}
      {icon && <View style={{ marginRight: spacing.sm }}>{icon}</View>}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.white,
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    marginTop: spacing.sm,
    justifyContent: "center",
  },
  text: { color: palette.text, fontWeight: "600" },
});
