// screens/ProfileScreen.js
// Viser en profil med billede og info-knapper

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfoButton from "../components/InfoButton";
import { palette, spacing, card, typography } from "../styles/GlobalStyles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={[card.base, styles.card]}>
        {/* Overskrift */}
        <Text style={[typography.title, styles.title, { color: "white" }]}>Profil</Text>

        {/* Profilbillede */}
        <Image source={require("../assets/profile.png")} style={styles.avatar} />

        {/* Info-knapper med navn, mail og telefon */}
        <InfoButton label="Sebastian Bruun" />
        <InfoButton 
          label="Sebastian.b@gmail.com" 
          icon={<Ionicons name="mail-outline" size={18} color={palette.text} />} 
        />
        <InfoButton 
          label="+45 12 34 56 78" 
          icon={<Ionicons name="call-outline" size={18} color={palette.text} />} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.white },
  card: { alignItems: "center" }, // centrer indholdet i kortet
  title: { marginBottom: spacing.sm },
  avatar: {
    width: 140, height: 140, borderRadius: 70, // rundt billede
    marginVertical: spacing.md, backgroundColor: "#ddd",
  },
});
