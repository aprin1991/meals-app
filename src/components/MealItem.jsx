import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = ({ item }) => {
  return (
    <View style={style.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={style.image} />
          <Text style={style.title}>{item.title}</Text>
          <View style={style.details}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#ccc",
    shadowOffset: { height: 2, width: 2 },
    shadowColor: "#ccc",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 10,
  },
  details: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MealItem;
