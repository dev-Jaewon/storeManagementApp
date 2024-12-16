import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type TabHeaderProps = {
  activeTab: "single" | "group";
  setActiveTab: (tab: "single" | "group") => void;
};

export const TabHeader = ({ activeTab, setActiveTab }: TabHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "single" && styles.activeTab]}
        onPress={() => setActiveTab("single")}
      >
        <Text
          style={[styles.tabText, activeTab === "single" && styles.activeText]}
        >
          단일 제품
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "group" && styles.activeTab]}
        onPress={() => setActiveTab("group")}
      >
        <Text
          style={[styles.tabText, activeTab === "group" && styles.activeText]}
        >
          그룹 제품
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    backgroundColor: "white",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeText: {
    color: "#007AFF",
    fontWeight: "600",
  },
});
