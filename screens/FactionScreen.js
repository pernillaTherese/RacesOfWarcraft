import { StyleSheet, FlatList, useWindowDimensions, View } from 'react-native';
import colors from '../utilities/colors';
import { FACTIONS } from '../data/FactionsData';

import Header from '../components/ui/Header';
import FactionItem from '../components/FactionItem';

const FactionScreen = ({ navigation }) => {
  const { styles } = myStyles();
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }

  const renderFactionItem = (faction) => {
    const goToRacesScreen = () => {
      navigation.navigate('Races', { faction: faction.item });
    };
    return <FactionItem item={faction.item} onPress={goToRacesScreen} />;
  };

  return (
    <View style={styles.screen}>
      <Header>Choose a faction</Header>
      <View style={styles.listContainer}>
        <FlatList
          data={FACTIONS}
          keyExtractor={(item) => item.id}
          renderItem={renderFactionItem}
          numColumns='1'
          horizontal={landscape ? true : false}
        />
      </View>
    </View>
  );
};

export default FactionScreen;

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
    listContainer: {
      flex: 1,
      alignItems: landscape ? 'center' : 'flex-start',
    },
  });
  return { styles };
};
