import { View, StyleSheet } from "react-native";
import { LabelInput } from "../common/labelInput";
import { useRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { CommonCollapsed } from "./CommonCollapsed";

export const ProductTitle = () => {
  const [uploadInfo, setuploadInfo] = useRecoilState(uploadProductInfo);

  const handleChangeTitle = (text: string) => {
    setuploadInfo({ ...uploadInfo, productName: text });
  };

  const handleChangeBrand = (text: string) => {
    setuploadInfo({ ...uploadInfo, brandName: text });
  };

  return (
    <CommonCollapsed title="상품 정보">
      <>
        <View style={styles.inputContainer}>
          <LabelInput
            value={uploadInfo.productName}
            onChangeText={handleChangeTitle}
            placeholder="상품명을 입력하세요"
            label="상품명"
          />
        </View>
        <View style={styles.inputContainer}>
          <LabelInput
            value={uploadInfo.brandName}
            onChangeText={handleChangeBrand}
            placeholder="브랜드를 입력하세요"
            label="브랜드"
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
