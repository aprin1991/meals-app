import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import MealItem from "../components/MealItem";

const MealOverviewScreen = ({ route }) => {
  const id = route.params.id;
  const navigation = useNavigation();

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(id) >= 0;
  });
  useLayoutEffect(() => {
    const category = CATEGORIES.find((el) => el.id === id);
    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, []);

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
