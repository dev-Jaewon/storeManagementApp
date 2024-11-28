import { useRef } from "react";
import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native"
import { CommText } from "../common/CommText";

type CommonCollapsedProps = {
  title: string;
  children: React.ReactNode;
}

export const CommonCollapsed = ({ title, children }: CommonCollapsedProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
        <CommText style={styles.headerTitle}>{title}</CommText>
        <TouchableOpacity onPress={toggleCollapse}>
          <CommText style={styles.headerButton}>{isCollapsed ? '펼치기' : '접기'}</CommText>
        </TouchableOpacity>
      </View>
    </Animated.View>
    {!isCollapsed && children}
  </View>
}

const styles = StyleSheet.create({
  container: {},
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
})