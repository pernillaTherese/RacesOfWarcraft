import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utilities/colors';

const SubTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
export default SubTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginStart: 12,
  },
  text: {
    color: Colors.black,
    fontSize: 20,
    marginHorizontal: 12,
  },
});
