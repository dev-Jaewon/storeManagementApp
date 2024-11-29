import { View, StyleSheet } from "react-native";
import { CommonCollapsed } from "./CommonCollapsed";
import { useRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { LabelInput } from "../common/labelInput";

export type Option = { optionName: string; optionValue: string };

export const Options = () => {
  const [uploadInfo, setUploadInfo] = useRecoilState(uploadProductInfo);

  const handleChangeOptionName = (text: string, position: string) => {
    if (
      uploadInfo.options.length === 0 ||
      uploadInfo.options.every((option) => option.optionName !== position)
    ) {
      setUploadInfo((prev) => ({
        ...prev,
        options: [...prev.options, { optionName: position, optionValue: text }],
      }));
    } else {
      setUploadInfo((prev) => ({
        ...prev,
        options: prev.options.map((option) =>
          option.optionName === position
            ? { ...option, optionValue: text }
            : option
        ),
      }));
    }
  };

  return (
    <CommonCollapsed title="옵션">
      <View style={styles.optionContainer}>
        <LabelInput
          onChangeText={(text) => handleChangeOptionName(text, "사이즈")}
          placeholder="옵션명을 입력하세요"
          label="사이즈"
        />
        <LabelInput
          onChangeText={(text) => handleChangeOptionName(text, "색상")}
          placeholder="옵션명을 입력하세요"
          label="색상"
        />
      </View>
    </CommonCollapsed>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 16,
    gap: 16,
  },
});
