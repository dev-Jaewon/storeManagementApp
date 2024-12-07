import { ScrollView, StyleSheet } from "react-native";
import { Layout } from "@/src/ui/common/Layout";
import { UploadHeader } from "@/src/ui/upload/UploadHeader";
import { ContentView } from "@/src/ui/upload/ContentView";
import { ProductTitle } from "@/src/ui/upload/ProductTitle";
import { ProductPrice } from "@/src/ui/upload/ProductPrice";
import { Category } from "@/src/ui/upload/Category";
import { Options } from "@/src/ui/upload/Options";

const UploadView = () => {
  return (
    <Layout>
      <UploadHeader title="업로드" textStyle={{ fontSize: 15 }} />
      <ScrollView style={styles.web_container}>
        <ProductTitle />
        <Category />
        <Options />
        <ProductPrice />
        <ContentView />
      </ScrollView>
    </Layout>
  );
};

export default UploadView;

const styles = StyleSheet.create({
  web_container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
