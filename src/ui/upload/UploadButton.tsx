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

export const UploadButton = () => {
  const router = useRouter();
  const [uploadInfo, setUploadInfo] = useRecoilState(uploadProductInfo);

  const uploadMutation = useMutation({
    mutationFn: (info: UploadProductInfo) => uploadProduct(info),
  });

  const handleUpload = () => {
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
