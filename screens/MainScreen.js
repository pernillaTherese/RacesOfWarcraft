import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import colors from '../utilities/colors';

import NavButton from '../components/ui/NavButton';
import Camera, { onTakePhotoHandler } from '../components/Camera';

const MainScreen = ({ navigation }) => {
  const { styles } = myStyles();
  const goToFactionScreen = () => {
    navigation.navigate('Factions');
  };
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Races of WarCraft</Text>
      <View style={styles.camera}>
        <Camera />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPressed={goToFactionScreen}>Wow Races</NavButton>
      </View>
    </View>
  );
};
export default MainScreen;

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
      alignItems: 'center',
      backgroundColor: colors.primaryBrown,
      paddingTop: 50,
    },
    header: {
      color: colors.primaryGold,
      fontSize: landscape ? height * 0.13 : width * 0.1,
      fontWeight: 'bold',
      marginTop: landscape ? 0 : height * 0.02,
    },
    buttonContainer: {
      justifyContent: 'flex-end',
      alignSelf: 'center',
      marginBottom: height * 0.1,
    },
    camera: {
      flex: 1,
      justifyContent: 'center',
      justifyContent: 'flex-end',
    },
  });
  return { styles };
};
