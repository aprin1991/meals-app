import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryTitle = ({ item, color }) => {
  const navigation = useNavigation();
  const handlePressCard = () => {
    navigation.navigate("MealOverview", { id: item.id });
  };

  return (
    <View style={[style.container, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [style.button]}
        android_ripple={{ color: "#ccc" }}
        onPress={handlePressCard}
      >
        <View style={style.innerContainer}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "#fff",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default CategoryTitle;
