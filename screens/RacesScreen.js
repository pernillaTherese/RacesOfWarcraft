import { View, FlatList, StyleSheet, useWindowDimensions } from 'react-native';

import { RACES } from '../data/RacesData';
import Header from '../components/ui/Header';
import SubTitle from '../components/ui/SubTitle';
import RaceItem from '../components/RaceItem';
import colors from '../utilities/colors';

const RacesScreen = ({ route }) => {
  const { styles } = myStyles();
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const faction = route.params.faction;
  const displayedRaces = RACES.filter((race) => {
    return race.factionId === faction.id;
  });

  const renderRace = (raceItem) => {
    return <RaceItem item={raceItem.item} />;
  };

  return (
    <View style={styles.screen}>
      <View>
        <Header>Choose a Race</Header>
        <SubTitle>{faction.title}</SubTitle>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={displayedRaces}
          numColumns='1'
          keyExtractor={(item) => item.id}
          renderItem={renderRace}
          horizontal={landscape ? true : false}
        />
      </View>
    </View>
  );
};
export default RacesScreen;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.primaryBrown,
    },
    textContainer: {
      flexDirection: 'column',
    },
    listContainer: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: landscape ? width * 0.05 : 0,
    },
  });
  return { styles };
};
