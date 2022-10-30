import { View, Text, StyleSheet } from 'react-native';
import colors from '../utilities/colors';

import Header from '../components/ui/Header';
import NavButton from '../components/ui/NavButton';

const MainScreen = ({ navigation }) => {
  const goToFactionScreen = () => {
    navigation.navigate('Factions');
  };
  return (
    <View style={styles.screen}>
      <Header>Races of WarCraft</Header>
      <View style={styles.buttonContainer}>
        <NavButton onPressed={goToFactionScreen}>Wow Races</NavButton>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryBrown,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
});
