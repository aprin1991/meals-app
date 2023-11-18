import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TProps = {
  duration: String;
  complexity: String;
  affordability: String;
  style?: Record<string, string>;
  textStyle?: Record<string, string>;
};

const MealOptions: FC<TProps> = ({
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
