import { View, StyleSheet } from "react-native";
import { LabelInput } from "../common/labelInput";
import { useRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { CommonCollapsed } from "./CommonCollapsed";
import { useLocalSearchParams } from "expo-router";
import { useSearchProductDetail } from "@/hooks/useSearchProductDetail";
import { useEffect } from "react";

export const ProductTitle = () => {
  const params = useLocalSearchParams<{ "upload-id": string }>();

  const searchQuery = useSearchProductDetail(params["upload-id"]);

  const [uploadInfo, setuploadInfo] = useRecoilState(uploadProductInfo);

  const handleChangeTitle = (text: string) => {
    setuploadInfo({ ...uploadInfo, productName: text });
  };

  const handleChangeBrand = (text: string) => {
    setuploadInfo({ ...uploadInfo, brandName: text });
  };

  useEffect(() => {
    if (searchQuery.data) {
      setuploadInfo({
        ...uploadInfo,
        productName: `${searchQuery.data.brand.toUpperCase()} ${
          searchQuery.data.title
        }`,
        brandName: searchQuery.data.brand.toUpperCase(),
      });
    }
  }, [searchQuery.data]);

  return (
    <CommonCollapsed title="상품 정보">
      <>
        <View style={styles.inputContainer}>
          <LabelInput
            value={uploadInfo.productName}
            onChangeText={handleChangeTitle}
            placeholder="상품명을 입력하세요"
            label="상품명"
            defaultValue={`${searchQuery.data?.brand.toUpperCase()} ${
              searchQuery.data?.title
            }`}
          />
        </View>
        <View style={styles.inputContainer}>
          <LabelInput
            value={uploadInfo.brandName}
            onChangeText={handleChangeBrand}
            placeholder="브랜드를 입력하세요"
            label="브랜드"
            defaultValue={uploadInfo.brandName.toUpperCase()}
          />
        </View>
        <View style={styles.inputContainer}>
          <LabelInput
            value={uploadInfo.originProductUrl}
            placeholder="상품페이지 URL을 입력하세요"
            label="상품페이지"
            defaultValue={uploadInfo.originProductUrl}
          />
        </View>
      </>
    </CommonCollapsed>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
  },
});
