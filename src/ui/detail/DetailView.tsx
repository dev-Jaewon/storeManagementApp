import { Product } from "@/src/util/typeApi/ProductsType";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { CommText } from "../common/CommText";
import { BottomView } from "./BottomView";

type DetailViewProps = {
  product: Product | undefined;
};

export const DetailView = ({ product }: DetailViewProps) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Image source={{ uri: product?.image }} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <CommText style={styles.brand}>{product?.brand}</CommText>
          </View>
          <View>
            <CommText style={styles.title}>{product?.title}</CommText>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceDetailContainer}>
              <View style={styles.exchangeCurrencyContainer}>
                <CommText style={styles.exchangeCurrency}>
                  {product?.price.exchange_currency}
                </CommText>
                <CommText style={styles.exchangeCurrency}>
                  / {product?.price.exchange_currency_price.toLocaleString()}
                </CommText>
              </View>

              <CommText style={styles.price}>
                {product?.price.origin_price.toLocaleString()}
              </CommText>
            </View>

            <View style={styles.priceDetailContainer}>
              <CommText style={styles.label}>KRW</CommText>
              <CommText style={styles.price}>
                {Number(product?.price.krw_price).toLocaleString()}원
              </CommText>
            </View>

            <View style={styles.priceDetailContainer}>
              <CommText style={styles.label}>M.G</CommText>
              <CommText style={styles.price}>
                {Number(product?.price.profit).toLocaleString()}원
              </CommText>
            </View>
          </View>
          <View style={styles.divider} />
          <View>
            <CommText style={styles.optionContainer}>
              옵션이 등록되지 않은 단일 상품입니다.
            </CommText>
          </View>
          <View style={styles.divider} />
          <View>
            <CommText style={styles.detailInfo}>상세정보</CommText>
            {product?.detail_text.map((url, index) => (
              <Image source={{ uri: url }} style={styles.detailImage} />
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomView
        link_product={product?.link_product || ""}
        link_store={product?.link_store || ""}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  brand: {
    fontSize: 18,
    color: "gray",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    padding: 30,
    gap: 15,
  },
  priceInfo: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
  },
  priceDetailContainer: {
    gap: 5,
  },
  label: {
    width: 50,
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.5,
    fontStyle: "italic",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  priceContainer: {
    gap: 15,
    marginVertical: 30,
  },
  exchangeCurrencyContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  exchangeCurrency: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.5,
    fontStyle: "italic",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    opacity: 0.5,
  },
  optionContainer: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "gray",
    paddingVertical: 40,
    textAlign: "center",
  },
  detailInfo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  detailImage: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
