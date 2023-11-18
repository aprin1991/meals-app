import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../components/MealItem";
import { getFavorits } from "../redux/features/meals/Selectors";

const FavoriteScreen = () => {
  const favorites = useSelector(getFavorits);

  const renderItem = (itemData) => <MealItem item={itemData.item} />;

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.noItemContainer}>
          <Text style={styles.noItemTitle}>There is no Item</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  noItemContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noItemTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    paddingBottom: 32,
  },
});
export default FavoriteScreen;
