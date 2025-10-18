// screens/ProgramScreen.js
import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../styles/programStyles";

export default function ProgramScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Program</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Lokation: Blå scene</Text>
          <Text style={styles.line}>9:00-9:50 KESI</Text>
          <Text style={styles.line}>13:00-13:50 TopGunn</Text>
          <Text style={styles.line}>15:00-15:50 Lukas Graham</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Lokation: Rød scene</Text>
          <Text style={styles.line}>11:00-11:50 Tessa</Text>
          <Text style={styles.line}>13:00-13:50 Jada</Text>
          <Text style={styles.line}>17:00-17:50 Benjamin Hav</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Lokation: Gule telt (workshop)</Text>
          <Text style={styles.line}>9:00-11:00 Ansigtsmaling</Text>
          <Text style={styles.line}>13:00-15:00 Yoga</Text>
          <Text style={styles.line}>Hele dagen: Skriv om dine Håb og Drømme</Text>
        </View>
      </ScrollView>
    </View>
  );
}
