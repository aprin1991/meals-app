import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MEALS } from "../../data/dummy-data";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealOptions from "../components/MealOptions";
import { toggle } from "../redux/features/meals/MealSlice";
import {
  getFavorits,
  isMealFavorited,
} from "../redux/features/meals/Selectors";
import { RootState } from "../redux/store";

const MealDetailScreen = ({ route }) => {
  const id = route.params.id;
  const meal = MEALS.find((meal) => meal.id === id);

  const favorites = useSelector(getFavorits);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFavorited = useSelector((state: RootState) =>
    isMealFavorited(state, id)
  );
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const foundIndex = favorites.findIndex((el) => el.id === meal.id);
    if (foundIndex === -1) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [favorites]);

  const handleHeaderClicked = () => {
    if (meal) {
      const mealObj = {
        id: meal.id,
        imageUrl: meal.imageUrl,
        title: meal.title,
        duration: meal.duration,
        complexity: meal.complexity,
        affordability: meal.affordability,
        ingredients: meal.ingredients,
        steps: meal.steps,
        categoryIds: meal.categoryIds,
      };
      dispatch(toggle(mealObj));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            size={24}
            color={isSelected ? "yellow" : "white"}
            onPress={handleHeaderClicked}
          />
        );
      },
    });
  }, [meal, navigation, isSelected]);

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
        color="white"
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
