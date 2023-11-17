import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealOptions from "../components/MealOptions";

const MealDetailScreen = ({ route }) => {
  const id = route.params.id;
  const meal = MEALS.find((meal) => meal.id === id);
  return (
    <ScrollView style={style.scrollList}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={style.image}
        resizeMode="cover"
      />
      <Text style={style.title}>{meal.title}</Text>
      <MealOptions
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={style.mealDetail}
      />
      <View style={style.outerContainer}>
        <View style={style.innerContainer}>
          <SubTitle title={"Ingredients"} />
          <List items={meal.ingredients} />
          <SubTitle title={"Steps"} />
          <List items={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    margin: 12,
    textAlign: "center",
  },
  mealDetail: {
    color: "#fff",
  },
  innerContainer: {
    width: "80%",
  },
  outerContainer: {
    alignItems: "center",
  },
  scrollList: {
    marginBottom: 32,
  },
});

export default MealDetailScreen;
