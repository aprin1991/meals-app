import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ title }) => {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{title}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
  subtitleContainer: {
    padding: 10,
    margin: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
export default SubTitle;
