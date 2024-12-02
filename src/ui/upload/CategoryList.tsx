import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { CommText } from "../common/CommText";
import { Category } from "@/src/util/typeApi/CategoryType";
import { useState, useEffect } from "react";

type CategoryListProps = {
  categories: Category[];
  setCategory: (id: string) => void;
};

export const CategoryList = ({
  categories,
  setCategory,
}: CategoryListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleSelectCategory = (category: Category) => {
    const [id] = category;
    setSelectedCategory(category);
    setCategory(id);
  };

  useEffect(() => {
    handleSelectCategory(categories[0]);
  }, [categories]);

  return (
    <ScrollView style={styles.categoryList}>
      {categories.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handleSelectCategory(item)}
          style={[
            styles.categoryItem,
            selectedCategory?.[0] === item[0] && styles.selectedItem,
          ]}
        >
          <CommText style={styles.categoryText}>{item[1]}</CommText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryList: {
    maxHeight: 200,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  categoryItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  categoryText: {
    fontSize: 14,
    color: "#333333",
  },
  selectedItem: {
    backgroundColor: "#F8F9FA",
  },
});
