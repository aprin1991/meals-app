import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type TProps = {
  duration: String;
  complexity: String;
  affordability: String;
  style?: Record<string, string>;
  textStyle?: Record<string, string>;
  color?: string;
};

const MealOptions: FC<TProps> = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
  color = "black",
}) => {
  return (
    <View style={[styles.details, style]}>
      <View style={styles.itemContainer}>
        <AntDesign name="clockcircleo" size={18} color={color} />
        <Text style={[textStyle]}>{duration}m</Text>
      </View>
      <View style={styles.itemContainer}>
        <AntDesign name="infocirlceo" size={18} color={color} />
        <Text style={[textStyle]}>{complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.itemContainer}>
        <AntDesign name="questioncircleo" size={18} color={color} />
        <Text style={[textStyle]}>{affordability.toUpperCase()}</Text>
      </View>
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
  itemContainer: {
    flexDirection: "row",
    gap: 2,
  },
});

export default MealOptions;
