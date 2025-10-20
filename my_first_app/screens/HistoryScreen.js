// Importerer nødvendige React hooks og komponenter
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/historyStyles';

// Nøgler til lokal lagring (AsyncStorage)
const STORAGE_YEAR_KEY = 'history.selectedYear'; // gemmer sidste valgte år
const FAVORITE_KEY = 'profile.favoriteQuote'; // gemmer yndlingscitat

export default function HistoryScreen() {
  // State til valgt år og yndlingscitat
  const [year, setYear] = useState('2024');
  const [favorite, setFavorite] = useState(null);

  // Citater fra tidligere Håb & Drømme Festivaler
  const quotes = {
    '2024': [
      `"Jeg drømmer om at finde mig en kæreste" - Hadi (15 år)`,
      `"Jeg drømmer om at lære at bage en kage" - Alma (13 år)`,
      `"Jeg drømmer om at arbejde" - Thomas (19 år)`,
    ],
    '2023': [
      `"Jeg drømmer om at blive musiker" - Sofie (16 år)`,
      `"Jeg drømmer om at få mit eget sted" - Mikkel (18 år)`,
    ],
  };

  // Sorterer årene, så det nyeste kommer først
  const years = Object.keys(quotes).sort((a, b) => b.localeCompare(a));

  // useEffect: henter tidligere gemt år og yndlingscitat fra AsyncStorage
  useEffect(() => {
    (async () => {
      const savedYear = await AsyncStorage.getItem(STORAGE_YEAR_KEY);
      const savedFav = await AsyncStorage.getItem(FAVORITE_KEY);
      if (savedYear && quotes[savedYear]) setYear(savedYear);
      if (savedFav) setFavorite(savedFav);
    })();
  }, []);

  // useEffect: gemmer det valgte år, hver gang brugeren ændrer det
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_YEAR_KEY, year).catch(() => {});
  }, [year]);

  // Funktion til at gemme eller fjerne yndlingscitat
  const toggleFavorite = async (quote) => {
    if (favorite === quote) {
      // Hvis citatet allerede er valgt → fjern det
      setFavorite(null);
      await AsyncStorage.removeItem(FAVORITE_KEY);
    } else {
      // Ellers gem nyt yndlingscitat
      setFavorite(quote);
      await AsyncStorage.setItem(FAVORITE_KEY, quote);
    }
  };

  // Viser hvert citat i listen + hjerteikon til at vælge favorit
  const renderItem = ({ item }) => {
    const isFav = item === favorite;
    return (
      <View style={styles.row}>
        <Text style={styles.quote}>{item}</Text>
        <TouchableOpacity
          style={styles.favBtn}
          onPress={() => toggleFavorite(item)}
          accessibilityLabel={isFav ? 'Fjern yndlingscitat' : 'Gem som yndlingscitat'}
        >
          <Ionicons
            name={isFav ? 'heart' : 'heart-outline'}
            size={22}
            color={isFav ? '#FF4D4F' : 'white'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  // Returnerer hele layoutet for skærmen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>H&amp;D fra tidligere år</Text>

      <View style={styles.panel}>
        {/* Kort introduktionstekst */}
        <Text style={styles.subtitle}>
          Her kan du se nogle "honorable mentions" af håb og drømme fra tidligere år
        </Text>

        {/* Dropdown til at vælge år */}
        <Text style={styles.label}>Vælg året her:</Text>
        <View style={styles.pickerWrap}>
          <Picker
            selectedValue={year}
            onValueChange={(v) => setYear(v)}
            mode="dropdown"
            style={styles.picker}
          >
            {years.map((y) => (
              <Picker.Item key={y} label={y} value={y} />
            ))}
          </Picker>
        </View>

        {/* Liste over citater for det valgte år */}
        <FlatList
          data={quotes[year] || []}
          keyExtractor={(item, idx) => `${year}-${idx}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 8, paddingBottom: 96 }}
        />
      </View>
    </View>
  );
}
