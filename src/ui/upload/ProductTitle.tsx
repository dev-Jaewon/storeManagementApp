import { View, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { CommText } from "../common/CommText"
import { useState, useRef } from "react"
import { LabelInput } from "../common/labelInput"

export const ProductTitle = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [title, setTitle] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const headerStyle = {
    transform: [{
      translateY: scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 0],
        extrapolate: 'clamp',
      })
    }]
  };

  return <View style={styles.container}>
    <Animated.View style={[styles.header, headerStyle]}>
      <View style={styles.headerContent}>
        <CommText style={styles.headerTitle}>상품 정보</CommText>
        <TouchableOpacity onPress={toggleCollapse}>
          <CommText style={styles.headerButton}>
            {isCollapsed ? '펼치기' : '접기'}
          </CommText>
        </TouchableOpacity>
      </View>
    </Animated.View>

    {!isCollapsed && (
      <>
        <View style={styles.inputContainer}>
          <LabelInput
            value={title}
            onChangeText={setTitle}
            placeholder="상품명을 입력하세요"
            label="상품명"
          />
        </View>
        <View style={styles.inputContainer}>
          <LabelInput
            value={title}
            onChangeText={setTitle}
            placeholder="브랜드를 입력하세요"
            label="브랜드"
          />
        </View>
      </>
    )}
  </View>
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    zIndex: 1,
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
  inputContainer: {
    padding: 16,
  }
})