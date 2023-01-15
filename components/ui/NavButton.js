import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import colors from '../../utilities/colors';

const NavButton = ({ children, onPressed }) => {
  const { styles } = myStyles();

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPressed}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default NavButton;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: colors.primaryGold,
      borderColor: colors.secondaryText,
      borderWidth: 2,
      width: landscape ? width * 0.5 : width * 0.8,
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
  return { styles };
};
