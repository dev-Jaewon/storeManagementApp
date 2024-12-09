import { createUseModal } from "react-native-use-modal";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { CommText } from "@/src/ui/common/CommText";
import { ImageData } from "@/src/util/typeApi/SearchType";
import { useRecoilState } from "recoil";
import { itemState } from "@/store/GroubReservation";
import { useEffect, useState } from "react";

type ImageSelectorParam = {
  index: number;
  list: ImageData[];
};

export const useImageSelector = createUseModal<void, ImageSelectorParam>(
  ({ confirm, param }) => {
    const [value, setValue] = useRecoilState(itemState(param.index));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, []);

    const toggleImageSelection = (image: ImageData) => {
      if (value.image_data.find((item) => item.url === image.url)) {
        setValue({
          ...value,
          image_data: value.image_data.filter((item) => item.url !== image.url),
        });
      } else {
        setValue({
          ...value,
          image_data: [...value.image_data, image],
        });
      }
    };

    const getImageIndex = (imageUrl: string) => {
      return value.image_data.findIndex((item) => item.url === imageUrl) + 1;
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.overlay} onPress={confirm} />
        <View style={styles.view}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <ScrollView>
              <View style={styles.imageGrid}>
                {param.list.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.imageContainer,
                      value.image_data.find((item) => item.url === image.url) &&
                        styles.selectedContainer,
                    ]}
                    onPress={() => toggleImageSelection(image)}
                  >
                    {value.image_data.find(
                      (item) => item.url === image.url
                    ) && (
                      <View style={styles.selectionBadge}>
                        <CommText style={styles.selectionText}>
                          {getImageIndex(image.url)}
                        </CommText>
                      </View>
                    )}
                    <View style={styles.dimensionsBadge}>
                      <CommText style={styles.dimensionsText}>
                        {image.width} x {image.height}
                      </CommText>
                    </View>
                    <Image
                      source={{ uri: image.url }}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  view: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    height: "100%",
    maxHeight: 1000,
    maxWidth: 1000,
    overflow: "hidden",
    zIndex: 1,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    width: "18%",
  },
  selectedContainer: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  dimensionsBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 12,
    padding: 4,
    zIndex: 2,
  },
  dimensionsText: {
    color: "#fff",
    fontSize: 12,
  },
  selectionBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#007AFF",
    borderRadius: 100,
    padding: 4,
    zIndex: 2,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
