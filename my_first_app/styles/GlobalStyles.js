// styles/GlobalStyles.js
// Fælles farver, spacing og styles til hele appen

// Farvepalette
export const palette = {
  teal: "#0B6B67",
  white: "#FFFFFF",
  text: "#0B0B0B",
  muted: "#EEEEEE",
};

// Afstande (margin/padding)
export const spacing = { 
  xs: 6, 
  sm: 10, 
  md: 16, 
  lg: 20 
};

// Tekststile
export const typography = {
  title: { fontSize: 22, fontWeight: "800" },
  subtitle: { fontSize: 14, fontWeight: "600", opacity: 0.9 },
  body: { fontSize: 16 },
};

// Kort-stil (genbrugelig container)
export const card = {
  base: {
    margin: spacing.md,
    backgroundColor: palette.teal,
    borderRadius: 12,
    padding: spacing.md,
  },
};
