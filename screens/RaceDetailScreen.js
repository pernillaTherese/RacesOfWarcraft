import React from 'react';
import { Image, View, Text, StyleSheet, FlatList } from 'react-native';

import { RACES } from '../data/RacesData';
import Header from '../components/ui/Header';
import Colors from '../utilities/colors';

const RaceDetailScreen = ({ route }) => {
  const itemId = route.params.id;

  const selectedItem = RACES.find((raceItem) => {
    return raceItem.id === itemId;
  });

  const FlatListClasses = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={selectedItem.classes}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.text}>{item.key} </Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Header>{selectedItem.title}</Header>
      <Image style={styles.image} source={selectedItem.imageUrl} />
      <Text style={styles.text}>Home City: {selectedItem.homeCity}</Text>
      <Text style={styles.text}>Racial Mount: {selectedItem.racialMount}</Text>
      <Text style={styles.text}>Leader: {selectedItem.leader}</Text>
      <Text style={styles.listTitle}>Playable Classes</Text>
      <FlatListClasses />
    </View>
  );
};

export default RaceDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: Colors.primaryGold,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 18,
    color: Colors.black,
  },
  listContainer: {
    flex: 1,
    margin: 12,
  },
  listItemContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primaryGold,
    margin: 5,
    padding: 5,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryGold,
    marginTop: 20,
    marginHorizontal: 12,
  },
});
