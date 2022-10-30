import { View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../../utilities/colors';

const NavButton = ({ children, onPressed }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPressed}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primaryGold,
    borderColor: colors.secondaryText,
    borderWidth: 2,
    margin: 20,
    borderRadius: 18,
    overflow: 'hidden',
  },
  buttonText: {
    color: colors.secondaryText,
    paddingVertical: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
