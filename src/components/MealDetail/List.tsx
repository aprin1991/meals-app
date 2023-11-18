import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
type TProps = {
  items: string[];
};
const List: FC<TProps> = ({ items }) => {
  return items.map((step) => (
    <View key={step} style={styles.listItem}>
      <Text style={styles.itemText} key={step}>
        {step}
      </Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
export default List;
