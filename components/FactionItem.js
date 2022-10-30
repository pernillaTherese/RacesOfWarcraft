import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import colors from "../utilities/colors";

const FactionItem = ({ item, onPress }) => {
  return (
    <View style={styles.screen}>
      <Pressable onPress={onPress}>
        <View style={styles.factionContainer}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.imageText}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default FactionItem;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.primaryBrown,
  },
  factionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
    marginLeft: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
  imageText: {
    color: colors.textLight,
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
});
