import { View } from "react-native";

import { createUseModal } from "react-native-use-modal";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { CommText } from "../../common/CommText";
import { useMemo, useState } from "react";
import { debounce } from "lodash";
import { useCategoryApi } from "@/hooks/useCategoryApi";
import { Category } from "@/src/util/typeApi/CategoryType";
import { useSetRecoilState } from "recoil";
import { category } from "@/store/category";

export const useCategorySelector = createUseModal(({ confirm }) => {
  const [categoryKeyword, setCategoryKeyword] = useState("");
  const setValue = useSetRecoilState(category);

  const { data } = useCategoryApi(categoryKeyword);

  const handleChangeCategoryKeyword = useMemo(
    () =>
      debounce((text: string) => {
        setCategoryKeyword(text);
      }, 300),
    [categoryKeyword]
  );

  const handleSelectCategory = (category: Category) => {
    setValue({
      text: category[1],
      code: category[0],
    });
    confirm();
  };

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleSelectCategory(item)}
    >
      <CommText>{item[1]}</CommText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.overlay} onPress={confirm} />
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeCategoryKeyword}
          placeholder="카테고리 검색"
        />
        {data && data.length > 0 && (
          <FlatList
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item[0]}
            style={styles.list}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  view: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    width: 500,
    height: 500,
    overflow: "hidden",
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "white",
  },
  categoryItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  list: {
    flex: 1,
  },
});
