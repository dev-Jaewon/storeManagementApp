import { ScrollView } from "react-native"
import { Layout } from "@/src/ui/common/Layout"
import { UploadHeader } from "@/src/ui/upload/UploadHeader"
import { ContentView } from "@/src/ui/upload/ContentView"
import { ProductTitle } from "@/src/ui/upload/ProductTitle"
import { ProductPrice } from "@/src/ui/upload/ProductPrice"

const UploadView = () => {
  return <Layout>
    <UploadHeader title="업로드" textStyle={{ fontSize: 15 }} />
    <ScrollView>
      <ProductTitle />
      <ProductPrice />
      <ContentView />
    </ScrollView>
  </Layout>

}

export default UploadView;