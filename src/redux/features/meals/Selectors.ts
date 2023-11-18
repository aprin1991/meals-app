import { createSelector } from "reselect";
import { RootState } from "../../store";

const selectedMeals = (state: RootState) => state.meals;

const getFavorits = createSelector(
  [selectedMeals],
  (item) => item.favoritedMeal
);

const isMealFavorited = (state: RootState, mealId: string) =>
  state.meals.favoritedMeal.some((meal) => meal.id === mealId);

export { getFavorits, isMealFavorited };
