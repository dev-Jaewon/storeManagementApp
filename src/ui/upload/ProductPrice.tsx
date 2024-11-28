import { View, StyleSheet } from "react-native"
import { useQuery } from "@tanstack/react-query"
import { getExchangeCurrency } from "@/src/util/api"
import { WeightPerPrice } from "./WeightPerPrice"
import { CommonCollapsed } from "./CommonCollapsed"
import { useState } from "react"
import { ExchangeCurrency } from "./ExchangeCurrency"
import { CalculatePrice } from "./CalculatePrice"

export const ProductPrice = () => {
  const [selectedCurrencyPrice, setSelectedCurrencyPrice] = useState(0);
  const [weightPrice, setWeightPrice] = useState(0);

  const { data: exchangeRates } = useQuery({
    queryKey: ['exchange-currency'],
    queryFn: () => getExchangeCurrency()
  })

  return <CommonCollapsed title="판매 가격">
    <View style={styles.container}>
      <ExchangeCurrency
        exchangeRates={exchangeRates || []}
        selectedCurrency={selectedCurrencyPrice}
        setSelectedCurrency={setSelectedCurrencyPrice}
      />
      <WeightPerPrice
        exchangeRates={exchangeRates || []}
        onChangeWeightPrice={setWeightPrice}
      />
      <CalculatePrice exchangeCurrency={selectedCurrencyPrice} weightPrice={weightPrice} />
    </View>
  </CommonCollapsed>
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
})