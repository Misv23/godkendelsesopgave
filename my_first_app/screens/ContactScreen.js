import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, FlatList, Linking, Alert } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ContactRow from "../components/ContactRow";
import { palette, spacing, card, typography } from "../styles/GlobalStyles";

// Funktion til at åbne links (mail, telefon, facebook)
const open = async (url) => {
  const can = await Linking.canOpenURL(url);
  if (!can) return Alert.alert("Kunne ikke åbne", url);
  return Linking.openURL(url);
};

export default function ContactScreen() {
  // Tilstand for hvilket land/nummer der er valgt
  const [selectedCountry, setSelectedCountry] = useState("dk");

  // Telefonnumre pr. land
  const phoneNumbers = {
    dk: { code: "+45", number: "7248 100" },
    se: { code: "+46", number: "08-123 456" },
    no: { code: "+47", number: "21 23 45 67" },
  };

  // Kontaktrækker (afhænger af hvilket land der er valgt)
  const data = useMemo(() => ([
    {
      id: "mail",
      icon: <Ionicons name="mail" size={22} color="white" />,
      label: "absalon@pha.dk",
      onPress: () => open("mailto:absalon@pha.dk"),
    },
    {
      id: "fb",
      icon: <FontAwesome name="facebook-square" size={22} color="white" />,
      label: "ProfessionshøjskolenAbsalon",
      onPress: () => open("https://www.facebook.com/ProfessionshojskolenAbsalon/"),
    },
    {
      id: "phone",
      icon: <Ionicons name="call" size={22} color="white" />,
      label: `${phoneNumbers[selectedCountry].code} ${phoneNumbers[selectedCountry].number}`,
      onPress: () =>
        open(
          `tel:${phoneNumbers[selectedCountry].code}${phoneNumbers[selectedCountry].number.replace(
            /\s+/g,
            ""
          )}`
        ),
    },
  ]), [selectedCountry]);

  return (
    <View style={styles.container}>
      <View style={card.base}>
        <Text style={[typography.title, { color: "white" }]}>Lad os snakke!</Text>
        <Text
          style={[typography.subtitle, { color: "white", marginBottom: spacing.sm }]}
        >
          Kontakt os
        </Text>

        {/* Valg af landekode */}
        <FlatList
          horizontal
          data={[
            { id: "dk", label: "DK" },
            { id: "se", label: "SE" },
            { id: "no", label: "NO" },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text
              style={[
                styles.country,
                selectedCountry === item.id && styles.activeCountry,
              ]}
              onPress={() => setSelectedCountry(item.id)}
            >
              {item.label}
            </Text>
          )}
          style={{ marginBottom: spacing.md }}
        />

        {/* Kontaktrækker (mail, facebook, telefon) */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContactRow
              icon={item.icon}
              label={item.label}
              onPress={item.onPress}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.white },
  country: {
    color: "white",
    marginRight: spacing.md,
    fontSize: 16,
    opacity: 0.7,
  },
  activeCountry: {
    fontWeight: "bold",
    opacity: 1,
    textDecorationLine: "underline",
  },
});
