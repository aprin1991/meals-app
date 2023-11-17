import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealOverviewScreen from "../screens/MealOverviewScreen";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CategoriesScreen} />
      <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
