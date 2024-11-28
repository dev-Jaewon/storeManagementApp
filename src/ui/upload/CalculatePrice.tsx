import { View, StyleSheet } from "react-native"
import { CommText } from "../common/CommText"
import { LabelInput } from "../common/labelInput"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { calculatePrice } from "@/src/util/api";

type CalculatePriceProps = {
  exchangeCurrency: number
  weightPrice: number
}

export const CalculatePrice = ({ exchangeCurrency, weightPrice }: CalculatePriceProps) => {
  const [margin, setMargin] = useState("15");
  const [discountPrice, setDiscountPrice] = useState("2");
  const [originalPrice, setOriginalPrice] = useState("0");

  const { data: priceData } = useQuery({
    queryKey: ['calculatePrice', exchangeCurrency, margin, weightPrice, originalPrice],
    queryFn: () => calculatePrice({
      weightPrice: weightPrice,
      margin: Number(margin),
      exchangePrice: exchangeCurrency,
      sellPrice: Number(originalPrice),
    })
  });

  return <View style={styles.container}>
    <View style={styles.priceContainer}>
      <View style={styles.priceInputContainer}>
        <LabelInput
          placeholder="할인가"
          label="할인가"
          onChangeText={setDiscountPrice}
          value={discountPrice}
        />
      </View>
      <View style={styles.priceInputContainer}>
        <LabelInput
          placeholder="마진"
          label="마진"
          onChangeText={setMargin}
          value={margin}
        />
      </View>
    </View>
    <View style={styles.priceInputContainer}>
      <LabelInput
        placeholder="원가"
        label="원가"
        onChangeText={setOriginalPrice}
        value={originalPrice}
      />
    </View>
    <View style={styles.resultContainer}>
      <View style={styles.resultRow}>
        <CommText style={styles.resultLabel}>수입가격:</CommText>
        <CommText style={styles.resultValue}>{Math.floor(priceData?.in_come_to_korea || 0).toLocaleString()}원</CommText>
      </View>
      <View style={styles.resultRow}>
        <CommText style={styles.resultLabel}>판매가:</CommText>
        <CommText style={styles.resultValue}>{Math.floor(priceData?.sell || 0).toLocaleString()}원</CommText>
      </View>
      <View style={styles.resultRow}>
        <CommText style={styles.resultLabel}>순이익:</CommText>
        <CommText style={styles.resultValue}>{Math.floor(priceData?.profit || 0).toLocaleString()}원</CommText>
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  priceContainer: {
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInputContainer: {
    flex: 1,
  },
  resultContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '600',
  }
})