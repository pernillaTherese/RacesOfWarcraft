import { View, FlatList, StyleSheet } from 'react-native';

import { RACES } from '../data/RacesData';
import Header from '../components/ui/Header';
import SubTitle from '../components/ui/SubTitle';
import RaceItem from '../components/RaceItem';

const RacesScreen = ({ route }) => {
  const faction = route.params.faction;

  const displayedRaces = RACES.filter((race) => {
    return race.factionId === faction.id;
  });

  const renderRace = (raceItem) => {
    return <RaceItem item={raceItem.item} />;
  };

  return (
    <View style={styles.screen}>
      <Header>Choose a Race</Header>
      <SubTitle>{faction.title}</SubTitle>
      <View>
        <FlatList
          style={styles.list}
          data={displayedRaces}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={renderRace}
        />
      </View>
    </View>
  );
};
export default RacesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  list: {
    marginBottom: 150,
  },
});
