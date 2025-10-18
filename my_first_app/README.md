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

## Skærme

Appen består af 5 skærme:

Kort – viser festivalpladsen
Kontakt – info om nødkontakt og mulighed for at sende mail
Profil – viser brugeroplysninger og favoritcitat
Program – oversigt over aktiviteter (fiktivt eksempel)
Historik – tidligere års citater fra Håb & Drømme Festivalen

## Struktur (uddrag)
- `App.js` – navigation og tabs
- `screens/` – `MapScreen.js`, `ProfileScreen.js`, `ContactScreen.js`, 'HistoryScreen.js', 'ProgramScreen.js'
- `components/` – genbrugelige komponenter
- `styles/GlobalStyles.js`, 'HeaderStyles.js', 'historyStyles.js', 'profileStyles.js', 'programStyles.js' – farver/spacing/typografi
- `assets/` – billeder/ikoner

## Ny funktionalitet med brug af AsyncStorage
På Historik-siden kan brugeren trykke på et hjerte-ikon ud for et citat.
Det valgte citat gemmes lokalt med AsyncStorage, så det huskes selv efter appen lukkes.
På Profil-siden vises det gemte citat under “Mit yndlingscitat”.
Brugeren kan altid fjerne citatet igen.

## "rettelser siden sidst" baseret på Sofies feedback
Expo Go er blevet opdateret til version 54.0.10
Alt styling er blevet flyttet hen under styles

Her er linket til demo nr.2 på youtube:
https://youtube.com/shorts/L0bPG9L6MaE?feature=share

Og linket til min github:
https://github.com/Misv23/godkendelsesopgave
og repository
https://github.com/Misv23/godkendelsesopgave.git