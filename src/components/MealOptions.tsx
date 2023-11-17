import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealOptions = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[textStyle]}>{duration}m</Text>
      <Text style={[textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MealOptions;
