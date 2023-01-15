import { Text, StyleSheet, useWindowDimensions } from 'react-native';
import colors from '../../utilities/colors';

const Header = ({ children }) => {
  const { styles } = myStyles();
  return <Text style={styles.headerText}>{children}</Text>;
};

export default Header;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }

  const styles = StyleSheet.create({
    headerText: {
      color: colors.primaryGold,
      fontSize: landscape ? height * 0.1 : width * 0.1,
      fontWeight: 'bold',
      marginStart: width * 0.05,
    },
  });
  return { styles };
};
