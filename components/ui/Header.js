import { View, Text, StyleSheet } from 'react-native';
import colors from '../../utilities/colors';

const Header = ({ children }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    margin: 12,
  },
  headerText: {
    color: colors.primaryGold,
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});
