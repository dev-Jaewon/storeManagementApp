import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Icons } from "../common/Icons";
import { useMutation } from "@tanstack/react-query";
import { uploadProduct } from "@/src/util/api";
import { useRecoilState } from "recoil";
import {
  initialUploadProductInfo,
  UploadProductInfo,
  uploadProductInfo,
} from "@/store/Upload";
import { useRouter } from "expo-router";
import { ModalResultUpload } from "./ModalResultUpload";
import { UPLOAD_PROPERTY } from "@/constants/UploadProperty";

export const UploadButton = () => {
  const router = useRouter();
  const resultModal = ModalResultUpload();
  const [uploadInfo, setUploadInfo] = useRecoilState(uploadProductInfo);

  const uploadMutation = useMutation({
    mutationFn: (info: UploadProductInfo) => uploadProduct(info),
  });

  const handleUpload = () => {
    for (const key in uploadInfo) {
      if (
        typeof uploadInfo[key as keyof UploadProductInfo] === "string" &&
        uploadInfo[key as keyof UploadProductInfo] === ""
      ) {
        resultModal.show({
          content:
            UPLOAD_PROPERTY[key as keyof UploadProductInfo] + "를 확인해주세요",
        });
        return;
      } else if (
        typeof uploadInfo[key as keyof UploadProductInfo] === "number" &&
        uploadInfo[key as keyof UploadProductInfo] === 0
      ) {
        resultModal.show({
          content:
            UPLOAD_PROPERTY[key as keyof UploadProductInfo] + "를 확인해주세요",
        });
        return;
      }
    }

    if (Platform.OS === "web") {
      router.push("/search");
    } else {
      router.back();
    }

    uploadMutation.mutate(uploadInfo);
    setUploadInfo(initialUploadProductInfo);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleUpload}>
      <Icons.Send />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
});
