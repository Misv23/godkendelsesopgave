// screens/ProfileScreen.js
// Profil med billede, info-knapper og visning af gemt yndlingscitat

import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import InfoButton from "../components/InfoButton";
import styles from "../styles/profileStyles";
import { palette } from "../styles/GlobalStyles"; // til ikonfarver

const FAVORITE_KEY = "profile.favoriteQuote";

export default function ProfileScreen() {
  const [favoriteQuote, setFavoriteQuote] = useState("");

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(FAVORITE_KEY);
      if (saved) setFavoriteQuote(saved);
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Teal panel som i din gamle profil */}
      <View style={[styles.cardBase, styles.cardAlign]}>
        <Text style={styles.title}>Profil</Text>

        {/* Profilbillede */}
        <Image source={require("../assets/profile.png")} style={styles.avatar} />

        {/* Info-knapper */}
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

      {/* Ger vises yndlingscitat (fra HistoryScreen) */}
      <View style={styles.quoteCard}>
        <Text style={styles.quoteTitle}>Mit yndlingscitat</Text>
        {favoriteQuote ? (
          <Text style={styles.quoteText}>{favoriteQuote}</Text>
        ) : (
          <Text style={styles.quoteMuted}>
            Du har ikke valgt et yndlingscitat endnu. Gå til “Historik” og tryk på hjertet.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
