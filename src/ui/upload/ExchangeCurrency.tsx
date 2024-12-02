import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CommText } from "../common/CommText";
import { ExchangeCurrency as ExchangeCurrencyType } from "@/src/util/typeApi/ExchangeCurrency";
import { useRecoilState } from "recoil";
import { uploadProductInfo } from "@/store/Upload";
import { useEffect } from "react";

type ExchangeCurrencyProps = {
  exchangeRates: ExchangeCurrencyType[];
};

export const ExchangeCurrency = ({ exchangeRates }: ExchangeCurrencyProps) => {
  const [uploadInfo, setuploadInfo] = useRecoilState(uploadProductInfo);

  const handleSelectedCurrency = (currency: string, price: number) => {
    setuploadInfo((prev) => ({
      ...prev,
      country: currency,
      exchangeCurrencyPrice: price,
    }));
  };

  useEffect(() => {
    if (exchangeRates.length > 0) {
      handleSelectedCurrency(exchangeRates[0].country, exchangeRates[0].price);
    }
  }, [exchangeRates]);

  return (
    <View style={styles.currencyContainer}>
      {exchangeRates?.map((rate) => (
        <TouchableOpacity
          key={rate.country}
          style={[
            styles.currencyButton,
            uploadInfo.country === rate.country && styles.selectedCurrency,
          ]}
          onPress={() => handleSelectedCurrency(rate.country, rate.price)}
        >
          <CommText
            style={[
              styles.currencyText,
              uploadInfo.country === rate.country &&
                styles.selectedCurrencyText,
            ]}
          >
            {rate.country}
          </CommText>
          <CommText
            style={[
              styles.priceText,
              uploadInfo.country === rate.country &&
                styles.selectedCurrencyText,
            ]}
          >
            {rate.price}
          </CommText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 8,
  },
  currencyButton: {
    flex: 1,
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 14,
  },
  selectedCurrencyText: {
    color: "white",
  },
  selectedCurrency: {
    backgroundColor: "#007AFF",
  },
});
