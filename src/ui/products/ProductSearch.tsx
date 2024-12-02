import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { CommText } from "../common/CommText";
import { useRouter } from "expo-router";
import {
  initialProductSearchFilter,
  productSearchFilter,
} from "@/store/ProductSearchFilter";
import { useRecoilState } from "recoil";
import { useMemo } from "react";
import { debounce } from "lodash";
import { SearchIconInput } from "../common/SearchIconInput";

export const ProductSearch = () => {
  const router = useRouter();

  const [searchInfo, setSearchInfo] = useRecoilState(productSearchFilter);

  const handleCancel = () => {
    setSearchInfo(initialProductSearchFilter);
    router.back();
  };

  const handleChangeTitleKeyword = useMemo(
    () =>
      debounce((text: string) => {
        setSearchInfo({ ...searchInfo, titleKeyword: text });
      }, 300),
    [searchInfo.titleKeyword]
  );

  return (
    <View
      style={[styles.container, Platform.OS === "web" && styles.web_container]}
    >
      <SearchIconInput onChangeText={handleChangeTitleKeyword} />
      <TouchableOpacity onPress={handleCancel}>
        <CommText style={styles.cancel}>Cancel</CommText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dddee3",
  },

  cancel: {
    fontSize: 17,
    color: "#767676",
  },
  web_container: {
    backgroundColor: "#fff",
  },
});
