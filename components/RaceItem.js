import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../utilities/colors';

const RaceItem = ({ item }) => {
  const { styles } = myStyles();
  const navigation = useNavigation();
  const onSelectedItemHandler = () => {
    navigation.navigate('RaceDetails', { id: item.id });
  };

  return (
    <Pressable style={styles.container} onPress={onSelectedItemHandler}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Image style={styles.image} source={item.imageUrl} />
    </Pressable>
  );
};

export default RaceItem;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: landscape ? height * 0.5 : height * 0.4,
      width: landscape ? width * 0.4 : width * 0.9,
      backgroundColor: colors.white,
      marginHorizontal: landscape ? height * 0.05 : width * 0.05,
      marginVertical: 15,
      borderRadius: 20,
      overflow: 'hidden',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black,
      marginHorizontal: 12,
      marginTop: 12,
      alignSelf: 'flex-start',
    },
    image: {
      flex: 1,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });
  return { styles };
};
