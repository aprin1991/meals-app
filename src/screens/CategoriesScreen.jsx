import React from "react";
import { FlatList, View } from "react-native";
import CategoryTitle from "../components/CategoryTitle";
import { CATEGORIES } from "./../../data/dummy-data";
const renderCategoryItem = (itemData) => {
  return <CategoryTitle item={itemData.item} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
