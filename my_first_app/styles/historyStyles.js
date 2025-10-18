import { StyleSheet } from 'react-native';
import { palette, spacing } from './GlobalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.teal,
    padding: spacing.md,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  subtitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: spacing.md,
  },

  label: {
    color: 'white',
    fontWeight: '600',
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },

  panel: {
    backgroundColor: palette.tealDark || '#2F6964',
    borderRadius: 12,
    padding: spacing.md,
  },

  pickerWrap: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },

  picker: {
    height: 48,
    width: '100%',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 8,
  },

  quote: {
    color: 'white',
    fontStyle: 'italic',
    flex: 1,
  },

  favBtn: {
    padding: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
});
