// styles/HeaderStyles.js
import { StyleSheet, Platform, StatusBar } from "react-native";
import { palette, spacing } from "./GlobalStyles";

export default StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // centrer logo + tekst
    paddingHorizontal: spacing.md,
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 0) + 10 : spacing.xl,
    paddingBottom: spacing.md,
    backgroundColor: "white",
  },
  centerWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 115,
    height: 36,
    resizeMode: "contain",
  },
  text: {
    marginLeft: spacing.sm,
    color: palette.text,
    fontWeight: "600",
    fontSize: 16,
  },
});
