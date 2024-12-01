import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { CommText } from "../common/CommText";

type DashbordItemProps = {
  title: string;
  routerPath: string;
  count: number;
};

export const DashbordItem = ({
  title,
  routerPath,
  count,
}: DashbordItemProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(routerPath)}
    >
      <CommText style={styles.title}>{title}</CommText>
      <CommText style={styles.count}>{count.toLocaleString()}건</CommText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "rgba(60, 64, 67, 0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 0.7,
  },
  count: {
    marginTop: "auto",
    textAlign: "right",
    fontSize: 25,
    fontWeight: "bold",
  },
});
