import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import colors from '../utilities/colors';
import { FACTIONS } from '../data/FactionsData';
import { StatusBar } from 'expo-status-bar';

import Header from '../components/ui/Header';
import FactionItem from '../components/FactionItem';

const FactionScreen = ({ navigation }) => {
  const renderFactionItem = (faction) => {
    const goToRacesScreen = () => {
      navigation.navigate('Races', { faction: faction.item });
    };
    return <FactionItem item={faction.item} onPress={goToRacesScreen} />;
  };

  return (
    <View style={styles.screen}>
      <Header>Choose a faction</Header>
      <FlatList
        data={FACTIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderFactionItem}
      />
      <StatusBar style='dark' />
    </View>
  );
};

export default FactionScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryBrown,
  },
  factionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 200,
    marginTop: 50,
    shadowColor: colors.black,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  imageText: {
    color: colors.textLight,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
