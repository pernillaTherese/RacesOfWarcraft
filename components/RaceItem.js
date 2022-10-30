import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../utilities/colors';

const RaceItem = ({ item }) => {
  const navigation = useNavigation();
  const onSelectedItemHandler = () => {
    navigation.navigate('RaceDetails', { id: item.id });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onSelectedItemHandler}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Image style={styles.image} source={item.imageUrl} />
      </Pressable>
    </View>
  );
};

export default RaceItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    padding: 12,
    paddingTop: 30,
    marginTop: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginHorizontal: 12,
  },
});
