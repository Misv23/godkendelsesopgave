import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/historyStyles';

const STORAGE_YEAR_KEY = 'history.selectedYear';
const FAVORITE_KEY = 'profile.favoriteQuote';

export default function HistoryScreen() {
  const [year, setYear] = useState('2024');
  const [favorite, setFavorite] = useState(null);

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

  const years = Object.keys(quotes).sort((a, b) => b.localeCompare(a));

  useEffect(() => {
    (async () => {
      const savedYear = await AsyncStorage.getItem(STORAGE_YEAR_KEY);
      const savedFav = await AsyncStorage.getItem(FAVORITE_KEY);
      if (savedYear && quotes[savedYear]) setYear(savedYear);
      if (savedFav) setFavorite(savedFav);
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_YEAR_KEY, year).catch(() => {});
  }, [year]);

  const toggleFavorite = async (quote) => {
    if (favorite === quote) {
      setFavorite(null);
      await AsyncStorage.removeItem(FAVORITE_KEY);
    } else {
      setFavorite(quote);
      await AsyncStorage.setItem(FAVORITE_KEY, quote);
    }
  };

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>H&amp;D fra tidligere år</Text>

      <View style={styles.panel}>
        <Text style={styles.subtitle}>
          Her kan du se nogle "honorable mentions" af håb og drømme fra tidligere år
        </Text>

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
