import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F2' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  logo: { width: 120, height: 40, alignSelf: 'flex-start', marginLeft: 16 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  content: { paddingHorizontal: 16, paddingBottom: 80 },
  block: {
    backgroundColor: '#2F6964', // mørk grønlig som i mockup
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  blockTitle: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  line: { color: 'white', marginBottom: 4 },
  bottomNav: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: 'white',
  },
});
