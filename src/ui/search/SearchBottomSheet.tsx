import { createUseBottomSheetModal } from "react-native-use-modal";
import { View, StyleSheet, Platform } from "react-native";
import { CommText } from "../common/CommText";
import { BottomSheetLayout } from "../common/BottomSheetLayout";
import { CommButton } from "../common/CommButton";
import { Icons } from "../common/Icons";
import { LabelInput } from "../common/labelInput";
import { useState } from "react";
import { searchProduct } from "@/src/util/api";

export const useSearchBottomSheet = createUseBottomSheetModal(({ confirm }) => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleConfirm = () => {
    try {
      // 비동치 처리를 위해 async/await 사용x
      searchProduct({ url, title });

      setUrl("");
      setTitle("");
      confirm();
    } catch (error) {
      console.log("상품 업로드 실패", error);
    }
  };

  return (
    <BottomSheetLayout>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <CommText style={styles.title}>상품 업로드</CommText>
          <CommText style={styles.description}>
            상품 정보를 입력해주세요.
          </CommText>
        </View>
        <LabelInput
          label={"URL"}
          placeholder="URL을 입력해주세요."
          onChangeText={setUrl}
          value={url}
          labelStyle={styles.labelStyle}
        />
        <LabelInput
          label={"상품명"}
          placeholder="상품명을 입력해주세요."
          onChangeText={setTitle}
          value={title}
          labelStyle={styles.labelStyle}
        />
        <CommButton onPress={handleConfirm}>
          <Icons.Scan color="white" />
        </CommButton>
      </View>
    </BottomSheetLayout>
  );
});

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "#454545",

    ...Platform.select({
      web: {
        fontSize: 20,
      },
      android: {
        fontSize: 20,
        fontWeight: "bold",
      },
      ios: {
        fontSize: 20,
        fontWeight: "bold",
      },
    }),
  },
  titleContainer: {
    gap: 10,
  },
  description: {
    color: "#999",

    ...Platform.select({
      web: {
        fontSize: 12,
        fontWeight: "400",
      },
      android: {
        fontSize: 16,
      },
      ios: {
        fontSize: 16,
      },
    }),
  },
  topUnderLine: {
    height: 1,
    backgroundColor: "black",
    width: 100,
    marginVertical: 30,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#dddee3",
    paddingBottom: 10,
  },
  labelStyle: {
    ...Platform.select({
      android: {
        fontSize: 15,
        fontWeight: "bold",
      },
      ios: {
        fontSize: 15,
        fontWeight: "bold",
      },
    }),
  },
});
