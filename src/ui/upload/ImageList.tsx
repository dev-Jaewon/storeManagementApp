import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ImageData } from "@/src/util/typeApi/SearchType";
import { CommText } from "../common/CommText";
import { CommonCollapsed } from "./CommonCollapsed";
import { useRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";

type ImageListProps = {
  imageData: ImageData[] | undefined;
};

export const ImageList = ({ imageData }: ImageListProps) => {
  const [uploadInfo, setuploadInfo] = useRecoilState(uploadProductInfo);

  const toggleImageSelection = (url: string) => {
    setuploadInfo((prev) => {
      if (prev.images.some((item) => item.url === url)) {
        return {
          ...prev,
          images: prev.images.filter((item) => item.url !== url),
        };
      } else {
        return {
          ...prev,
          images: [...prev.images, { url, height: 0, width: 0 }],
        };
      }
    });
  };

  return (
    <CommonCollapsed title="이미지">
      <ScrollView>
        <View style={styles.imageGrid}>
          {imageData?.map((item, index) => {
            const selectedIndex = uploadInfo.images.findIndex(
              (image) => image.url === item.url
            );
            const isSelected = selectedIndex !== -1;
            return (
              <TouchableOpacity
                key={index}
                style={styles.imageContainer}
                onPress={() => toggleImageSelection(item.url)}
              >
                <Image
                  source={{ uri: item.url }}
                  style={[styles.image, isSelected && styles.selectedImage]}
                  resizeMode="contain"
                />
                <View style={styles.sizeContainer}>
                  <CommText style={styles.sizeText}>
                    {item.width} x {item.height}
                  </CommText>
                </View>
                {isSelected && (
                  <View style={styles.selectedOverlay}>
                    <CommText style={styles.orderNumber}>
                      {selectedIndex + 1}
                    </CommText>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </CommonCollapsed>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  headerButton: {
    color: "#007AFF",
    fontSize: 14,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  selectedImage: {
    opacity: 0.7,
  },
  sizeContainer: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 2,
    borderRadius: 4,
  },
  sizeText: {
    color: "white",
    fontSize: 10,
  },
  selectedOverlay: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  orderNumber: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
