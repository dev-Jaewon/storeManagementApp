import { createUseBottomSheetModal } from "react-native-use-modal";
import { View, StyleSheet } from "react-native";
import { CommText } from "../common/commText";
import { BottomSheetLayout } from "../common/BottomSheetLayout";
import { CommButton } from "../common/CommButton";
import { Icons } from "../common/Icons";
import { LabelInput } from "../common/labelInput";
import { useState } from "react";
import { searchProduct } from "@/src/util/api";

export const useSearchBottomSheet = createUseBottomSheetModal(
  ({ confirm }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const handleConfirm = () => {
      try {
        // 비동치 처리를 위해 async/await 사용x
        searchProduct({ url, title });

        setUrl('');
        setTitle('');
        confirm();
      } catch (error) {
        console.log("상품 업로드 실패", error);
      }
    }

    return (
      <BottomSheetLayout>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <CommText style={styles.title}>상품 업로드</CommText>
            <CommText style={styles.description}>상품 정보를 입력해주세요.</CommText>
          </View>
          <LabelInput label={"URL"} placeholder="URL을 입력해주세요." onChangeText={setUrl} value={url} />
          <LabelInput label={"상품명"} placeholder="상품명을 입력해주세요." onChangeText={setTitle} value={title} />
          <CommButton onPress={handleConfirm} >
            <Icons.Scan color="white" />
          </CommButton>
        </View>
      </BottomSheetLayout>
    )
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#454545'
  },
  titleContainer: {
    gap: 10
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#999'
  },
  topUnderLine: {
    height: 1,
    backgroundColor: 'black',
    width: 100,
    marginVertical: 30
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddee3',
    paddingBottom: 10
  }
})