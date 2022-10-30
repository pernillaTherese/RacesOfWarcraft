import { View, StyleSheet, FlatList } from 'react-native';

import { FACTIONS } from '../data/FactionsData';
import colors from '../utilities/constants/colors';
import FactionItem from '../components/FactionItem';
import Header from '../components/ui/Header';

const AllianceRacesScreen = () => {
  const renderFactionItem = (faction) => {
    return <FactionItem item={faction.item} />;
  };
  return (
    <View style={styles.screen}>
      <Header>Choose a race</Header>
      <FlatList
        data={FACTIONS}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderFactionItem}
      />
    </View>
  );
};

export default AllianceRacesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: colors.lightText,
    fontSize: 24,
    textAlign: 'center',
  },
  title: {
    color: colors.lightText,
    fontSize: 16,
    marginHorizontal: 12,
  },
});
