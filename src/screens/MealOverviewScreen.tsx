import React from "react";
import { FlatList, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "../components/MealItem";

const MealOverviewScreen = ({ route }) => {
  const id = route.params.id;

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(id) >= 0;
  });

  const renderItem = (itemData) => <MealItem item={itemData.item} />;

  return (
    <View>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealOverviewScreen;
