import { View, StyleSheet } from "react-native";
import { useMemo, useState } from "react";
import { debounce } from "lodash";
import { CommonCollapsed } from "./CommonCollapsed";
import { LabelInput } from "../common/labelInput";
import { CategoryLoading } from "./CategoryLoading";
import { CategoryNodata } from "./CategoryNodata";
import { CategoryList } from "./CategoryList";
import { useCategoryApi } from "@/hooks/useCategoryApi";
import { useSetRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";

export const Category = () => {
  const [keyword, setKeyword] = useState("");

  const { data: categories, isFetching } = useCategoryApi(keyword);

  const setUploadProductInfo = useSetRecoilState(uploadProductInfo);

  const handleChangeCategory = useMemo(
    () =>
      debounce((text: string) => {
        setKeyword(text);
      }, 300),
    [keyword]
  );

  return (
    <CommonCollapsed title="카테고리">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <LabelInput
            placeholder="카테고리를 입력해주세요."
            onChangeText={handleChangeCategory}
          />
          {isFetching ? (
            <CategoryLoading />
          ) : categories && categories.length > 0 ? (
            <CategoryList
              categories={categories}
              setCategory={(id: string) => {
                setUploadProductInfo((prev) => ({ ...prev, category: id }));
              }}
            />
          ) : (
            keyword !== "" && <CategoryNodata />
          )}
        </View>
      </View>
    </CommonCollapsed>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  inputContainer: {
    gap: 8,
  },
  searchContainer: {
    position: "relative",
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    width: "100%",
  },
});
