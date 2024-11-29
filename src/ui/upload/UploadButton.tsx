import { TouchableOpacity, StyleSheet } from "react-native";
import { Icons } from "../common/Icons";
import { useMutation } from "@tanstack/react-query";
import { uploadProduct } from "@/src/util/api";
import { useRecoilValue } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { useRouter } from "expo-router";

export const UploadButton = () => {
  const router = useRouter();
  const uploadInfo = useRecoilValue(uploadProductInfo);

  const uploadMutation = useMutation({
    mutationFn: () => uploadProduct(uploadInfo),
  });

  const handleUpload = () => {
    uploadMutation.mutate();
    router.back();
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
