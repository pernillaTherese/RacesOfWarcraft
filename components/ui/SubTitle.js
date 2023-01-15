import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import colors from '../../utilities/colors';

const SubTitle = ({ children }) => {
  const { styles } = myStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
export default SubTitle;
const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginLeft: width * 0.05,
    },
    text: {
      color: colors.textLight,
      fontSize: 20,
      marginBottom: landscape ? height * 0.05 : height * 0.02,
    },
  });
  return { styles };
};
