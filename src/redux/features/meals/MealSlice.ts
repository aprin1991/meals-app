import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TMeal } from "../../../types";

interface YourState {
  favoritedMeal: TMeal[];
}

const initialState: YourState = {
  favoritedMeal: [],
};

export const MealSlice = createSlice({
  name: "favoritedMeals",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<TMeal>) => {
      const meal = action.payload;
      const index = state.favoritedMeal.findIndex((m) => m.id === meal.id);

      if (index !== -1) {
        state.favoritedMeal.splice(index, 1);
      } else {
        state.favoritedMeal.push(meal);
      }
    },
  },
});

export const { toggle } = MealSlice.actions;

export default MealSlice.reducer;
