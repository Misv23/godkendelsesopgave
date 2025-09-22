// screens/MapScreen.js
// Viser et kort med en marker på Festivalspladsen

import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { palette, spacing, card, typography } from "../styles/GlobalStyles";

// Koordinater til placeringen
const LAT = 55.6415;
const LNG = 12.4198;

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={[card.base, { paddingBottom: spacing.md }]}>
        {/* Overskrift */}
        <Text style={[typography.title, { color: "white", marginBottom: spacing.sm }]}>
          Festivalspladsen
        </Text>

        {/* Kort med marker */}
        <MapView
          style={styles.map}
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined} // Brug Google Maps på Android
          initialRegion={{
            latitude: LAT,
            longitude: LNG,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: LAT, longitude: LNG }} title="Festivalspladsen" />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.white },
  map: { height: 320, borderRadius: 8, overflow: "hidden" },
});
