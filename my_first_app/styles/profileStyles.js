import { StyleSheet } from "react-native";
import { palette, spacing, card, typography } from "./GlobalStyles";

export default StyleSheet.create({
  // Sidecontainer
  container: {
    flexGrow: 1,
    backgroundColor: palette.white,
    padding: spacing.md,
    gap: spacing.md,
  },

  // Teal "kort" som den gamle profil havde
  cardBase: {
    ...card.base,
    backgroundColor: palette.tealDark || "#2F6964",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },

  // Hvid overskrift på teal baggrund
  title: {
    ...typography.title,
    color: "white",
    marginBottom: spacing.sm,
    textAlign: "center",
  },

  // Rundt profilbillede
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: spacing.md,
    backgroundColor: "#ddd",
  },

  // “Mit yndlingscitat” sektion nedenfor teal-kortet
  quoteCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: spacing.md,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  quoteTitle: {
    fontWeight: "700",
    color: palette.text,
    marginBottom: spacing.xs,
  },

  quoteText: {
    color: palette.text,
    fontStyle: "italic",
    lineHeight: 20,
  },

  quoteMuted: {
    color: "#777",
    fontStyle: "italic",
  },
});
