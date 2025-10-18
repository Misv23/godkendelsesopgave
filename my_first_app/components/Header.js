// components/Header.js
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/HeaderStyles";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.centerWrap}>
        <Image source={require("../assets/SlagelseKommuneLogo.png")} style={styles.logo} />
        <Text style={styles.text}>Slagelse kommune</Text>
      </View>
    </View>
  );
}
