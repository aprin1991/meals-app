import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealOptions from "./MealOptions";

const MealItem = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("MealDetail", { id: item.id });
  };

  return (
    <View style={style.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={handlePress}>
        <View>
          <Image source={{ uri: item.imageUrl }} style={style.image} />
          <Text style={style.title}>{item.title}</Text>

          <MealOptions
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
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
});

export default MealItem;
