import { useQuery } from "@tanstack/react-query";
import { getWeightPerPrice } from "@/src/util/api";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { CommText } from "../common/CommText";
import { useState } from "react";
import { LabelInput } from "../common/labelInput";
import { ExchangeCurrency as ExchangeCurrencyType } from "@/src/util/typeApi/ExchangeCurrency";

type WeightPerPriceProps = {
  onChangeWeightPrice: (price: number) => void;
  exchangeRates: ExchangeCurrencyType[];
};

export const WeightPerPrice = ({
  onChangeWeightPrice,
  exchangeRates,
}: WeightPerPriceProps) => {
  const [weight, setWeight] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const { data: weightPerPrice } = useQuery({
    queryKey: ["weight-per-price", weight],
    queryFn: () => getWeightPerPrice(weight),
  });

  const handleSelectCountry = (country: string, price: number) => {
    setSelectedCountry(country);
    onChangeWeightPrice(price);
  };

  const getJapanPriceInKRW = () => {
    const japanRate = exchangeRates.find((rate) => rate.country === "JPY");
    if (!weightPerPrice?.japan.price || !japanRate) return 0;
    return Math.floor(weightPerPrice.japan.price * japanRate.price);
  };

  const getUsPriceInKRW = () => {
    const usRate = exchangeRates.find((rate) => rate.country === "USD");
    if (!weightPerPrice?.us.price || !usRate) return 0;
    return Math.floor(weightPerPrice.us.price * usRate.price);
  };

  return (
    weightPerPrice && (
      <View style={styles.container}>
        <LabelInput
          value={weight.toString()}
          onChangeText={(text) => setWeight(Number(text))}
          placeholder="제품 무게를 입력하세요"
          label="제품 무게"
        />
        <View style={styles.weightContainer}>
          <TouchableOpacity
            style={[
              styles.weightItem,
              selectedCountry === "독일" && styles.selectedItem,
            ]}
            onPress={() =>
              handleSelectCountry("독일", weightPerPrice.germany.price)
            }
          >
            <CommText
              style={[
                styles.weightCountry,
                selectedCountry === "독일" && styles.selectedText,
              ]}
            >
              독일
            </CommText>
            <CommText
              style={[
                styles.weightPrice,
                selectedCountry === "독일" && styles.selectedText,
              ]}
            >
              {weightPerPrice.germany.price.toLocaleString()}원
            </CommText>
            <CommText
              style={[
                styles.weightValue,
                selectedCountry === "독일" && styles.selectedText,
              ]}
            >
              {weightPerPrice.germany.weight}kg
            </CommText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weightItem,
              selectedCountry === "일본" && styles.selectedItem,
            ]}
            onPress={() => handleSelectCountry("일본", getJapanPriceInKRW())}
          >
            <CommText
              style={[
                styles.weightCountry,
                selectedCountry === "일본" && styles.selectedText,
              ]}
            >
              일본
            </CommText>
            <CommText
              style={[
                styles.weightPrice,
                selectedCountry === "일본" && styles.selectedText,
              ]}
            >
              {weightPerPrice.japan.price.toLocaleString()}엔 (
              {getJapanPriceInKRW().toLocaleString()}원)
            </CommText>
            <CommText
              style={[
                styles.weightValue,
                selectedCountry === "일본" && styles.selectedText,
              ]}
            >
              {weightPerPrice.japan.weight}kg
            </CommText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weightItem,
              selectedCountry === "영국" && styles.selectedItem,
            ]}
            onPress={() => handleSelectCountry("영국", weightPerPrice.uk.price)}
          >
            <CommText
              style={[
                styles.weightCountry,
                selectedCountry === "영국" && styles.selectedText,
              ]}
            >
              영국
            </CommText>
            <CommText
              style={[
                styles.weightPrice,
                selectedCountry === "영국" && styles.selectedText,
              ]}
            >
              {weightPerPrice.uk.price}원
            </CommText>
            <CommText
              style={[
                styles.weightValue,
                selectedCountry === "영국" && styles.selectedText,
              ]}
            >
              {weightPerPrice.uk.weight}kg
            </CommText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.weightItem,
              selectedCountry === "미국" && styles.selectedItem,
            ]}
            onPress={() => handleSelectCountry("미국", getUsPriceInKRW())}
          >
            <CommText
              style={[
                styles.weightCountry,
                selectedCountry === "미국" && styles.selectedText,
              ]}
            >
              미국
            </CommText>
            <CommText
              style={[
                styles.weightPrice,
                selectedCountry === "미국" && styles.selectedText,
              ]}
            >
              {weightPerPrice.us.price.toLocaleString()}달러 (
              {getUsPriceInKRW().toLocaleString()}원)
            </CommText>
            <CommText
              style={[
                styles.weightValue,
                selectedCountry === "미국" && styles.selectedText,
              ]}
            >
              {weightPerPrice.us.weight}kg
            </CommText>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  weightContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
  },
  weightItem: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    gap: 4,
  },
  selectedItem: {
    backgroundColor: "#E6F2FF",
  },
  weightCountry: {
    fontSize: 14,
    fontWeight: "600",
    color: "#454545",
  },
  weightPrice: {
    fontSize: 12,
    color: "#666",
  },
  weightValue: {
    fontSize: 12,
    color: "#666",
  },
  selectedText: {
    color: "#007AFF",
  },
});
