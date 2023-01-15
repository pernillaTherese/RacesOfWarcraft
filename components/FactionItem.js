import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import colors from '../utilities/colors';

const FactionItem = ({ item, onPress }) => {
  const { styles } = myStyles();

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.factionContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
          </View>
          <Text style={styles.imageText}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default FactionItem;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    factionContainer: {
      flexDirection: landscape ? 'column' : 'row',
      alignItems: 'center',
      marginStart: landscape ? 0 : width * 0.05,
      marginVertical: landscape ? 0 : height * 0.03,
    },
    imageContainer: {
      width: landscape ? height * 0.3 : width * 0.3,
      height: landscape ? height * 0.3 : width * 0.3,
      marginHorizontal: landscape ? width * 0.05 : 0,
      marginVertical: landscape ? 0 : height * 0.01,
    },
    image: {
      flex: 1,
      width: undefined,
      height: undefined,
      resizeMode: 'contain',
      shadowColor: colors.black,
      shadowOffset: { width: 5, height: 10 },
      shadowRadius: 10,
      shadowOpacity: 0.4,
    },
    imageText: {
      color: colors.textLight,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: landscape ? 0 : width * 0.05,
      marginTop: landscape ? 20 : 0,
    },
  });

  return { styles };
};
