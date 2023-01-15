import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';

import { RACES } from '../data/RacesData';
import Header from '../components/ui/Header';
import colors from '../utilities/colors';

const RaceDetailScreen = ({ route }) => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const { styles } = myStyles();
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
          numColumns={landscape ? '3' : '2'}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Header>{selectedItem.title}</Header>
      <ImageBackground
        style={styles.background}
        imageStyle={styles.image}
        source={selectedItem.imageUrl}
      >
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Home City: {selectedItem.homeCity}</Text>
            <Text style={styles.text}>
              Racial Mount: {selectedItem.racialMount}
            </Text>
            <Text style={styles.text}>Leader: {selectedItem.leader}</Text>
          </View>

          <View style={styles.listContainer}>
            <Text style={styles.listTitle}>Playable Classes</Text>
            <FlatListClasses />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RaceDetailScreen;

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
    background: {
      flex: 1,
      paddingBottom: 20,
    },
    image: {
      opacity: 0.3,
      resizeMode: 'cover',
    },
    contentContainer: {
      flex: 1,
      marginHorizontal: width * 0.05,
      justifyContent: 'space-evenly',
    },
    textContainer: {
      flex: 1,
    },
    text: {
      fontSize: 18,
      color: colors.textLight,
    },
    listContainer: {
      flex: 1,
      height: height * 0.5,
      alignSelf: 'center',
    },
    listItemContainer: {
      width: landscape ? width * 0.25 : width * 0.4,
      height: landscape ? height * 0.07 : width * 0.07,
      paddingLeft: 5,
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: colors.primaryGold,
      marginBottom: landscape ? height * 0.03 : width * 0.03,
      marginRight: landscape ? height * 0.03 : width * 0.03,
      backgroundColor: colors.primaryBrown,
    },
    listTitle: {
      fontSize: landscape ? height * 0.06 : width * 0.06,
      fontWeight: 'bold',
      color: colors.primaryGold,
      marginBottom: landscape ? height * 0.03 : width * 0.03,
    },
  });
  return { styles };
};
