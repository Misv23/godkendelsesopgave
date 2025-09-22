# my_first_app

React Native (Expo) app med 3 screens: Kort, Profil og Kontakt.

## Kør projektet
- Installer afhængigheder: `npm install`
- Start: `npx expo start` (brug `--tunnel` hvis ikke på samme Wi-Fi som telefonen)

## Krav-opfyldelse
- 3 views/screens: Kort, Profil, Kontakt
- 2+ knapper: Tabs (navigation) + Kontakt-rækker (åbner mail/telefon)
- 1+ liste: Landeliste (DK/SE/NO) + Kontaktliste
- Styling i separat fil: `styles/GlobalStyles.js`

## Struktur (uddrag)
- `App.js` – navigation og tabs
- `screens/` – `MapScreen.js`, `ProfileScreen.js`, `ContactScreen.js`
- `components/` – genbrugelige komponenter
- `styles/GlobalStyles.js` – farver/spacing/typografi
- `assets/` – billeder/ikoner


Her er linket til min demo på youtube:
https://youtube.com/shorts/dxy2EDYaGf4?feature=share