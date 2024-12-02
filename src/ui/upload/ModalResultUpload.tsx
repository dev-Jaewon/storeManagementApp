import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createUseModal } from "react-native-use-modal";
import { CommText } from "../common/CommText";

type Param = {
  content: string;
};

export const ModalResultUpload = createUseModal<void, Param>(
  ({ confirm, param }) => {
    return (
      <TouchableOpacity style={styles.container} onPress={confirm}>
        <View style={styles.content}>
          <View style={styles.header}>
            <CommText style={styles.headerText}>경고!</CommText>
          </View>
          <View style={styles.body}>
            <CommText style={styles.bodyText}>{param.content}</CommText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 400,
    height: 200,
    overflow: "hidden",
  },
  header: {
    height: 60,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  bodyText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
