import { useLocalSearchParams } from "expo-router";
import { Layout } from "@/src/ui/common/Layout";
import { getProductDetail } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";
import { DetailView } from "@/src/ui/detail/DetailView";
import { DetailHeader } from "@/src/ui/detail/DetailHeader";

export default function ProductDetail() {
  const params = useLocalSearchParams<{ "product-id": string }>();

  const productDetailQuery = useQuery({
    queryKey: ["product-detail", params["product-id"]],
    queryFn: () => getProductDetail(params["product-id"]),
  });

  return (
    <Layout>
      <DetailHeader />
      <DetailView product={productDetailQuery.data} />
    </Layout>
  );
}
