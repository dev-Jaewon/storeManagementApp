import { View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { ImageData } from "@/src/util/typeApi/SearchType"
import { CommText } from "../common/CommText"
import { useState } from "react"
import { CommonCollapsed } from "./CommonCollapsed"

type ImageListProps = {
  imageData: ImageData[] | undefined
}

export const ImageList = ({ imageData }: ImageListProps) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const toggleImageSelection = (url: string) => {
    setSelectedImages(prev => {
      if (prev.includes(url)) {
        return prev.filter(item => item !== url);
      } else {
        return [...prev, url];
      }
    });
  };

  return <CommonCollapsed title="이미지">
    <FlatList
      data={imageData}
      numColumns={3}
      scrollEnabled={true}
      renderItem={({ item }) => {
        const isSelected = selectedImages.includes(item.url);
        return (
          <TouchableOpacity
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
                {item.width}x{item.height}
              </CommText>
            </View>
            {isSelected && (
              <View style={styles.selectedOverlay}>
                <View style={styles.checkmark} />
              </View>
            )}
          </TouchableOpacity>
        );
      }}
    />
  </CommonCollapsed>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerButton: {
    color: '#007AFF',
    fontSize: 14,
  },
  imageContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    padding: 1,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  selectedImage: {
    opacity: 0.7
  },
  sizeContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 2,
    borderRadius: 4
  },
  sizeText: {
    color: 'white',
    fontSize: 10
  },
  selectedOverlay: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkmark: {
    width: 10,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'white',
    transform: [{ rotate: '-45deg' }]
  }
});