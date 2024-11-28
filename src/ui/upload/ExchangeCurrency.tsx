import { View, StyleSheet, TouchableOpacity } from "react-native"
import { CommText } from "../common/CommText"
import { ExchangeCurrency as ExchangeCurrencyType } from "@/src/util/typeApi/ExchangeCurrency";
import { useState } from "react";

type ExchangeCurrencyProps = {
    exchangeRates: ExchangeCurrencyType[];
    selectedCurrency: number;
    setSelectedCurrency: (price: number) => void;
}

export const ExchangeCurrency = ({ exchangeRates, setSelectedCurrency }: ExchangeCurrencyProps) => {
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleSelectedCurrency = (currency: string, price: number) => {
        setSelectedCountry(currency);
        setSelectedCurrency(price);
    }

    return <View style={styles.currencyContainer}>
    {exchangeRates?.map((rate) => (
      <TouchableOpacity
        key={rate.country}
        style={[styles.currencyButton, selectedCountry === rate.country && styles.selectedCurrency]}
        onPress={() => handleSelectedCurrency(rate.country, rate.price)}
      >
        <CommText style={[styles.currencyText, selectedCountry === rate.country && styles.selectedCurrencyText]}>
          {rate.country}
        </CommText>
        <CommText style={[styles.priceText, selectedCountry === rate.country && styles.selectedCurrencyText]}>
          {rate.price}
        </CommText>
      </TouchableOpacity>
    ))}
  </View>
}

const styles = StyleSheet.create({
    currencyContainer: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 8,
      },
      currencyButton: {
        flex: 1,
        padding: 12,
        marginVertical: 4,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      },
      currencyText: {
        fontSize: 16,
        fontWeight: '500',
      },
      priceText: {
        fontSize: 14,
      },
      selectedCurrencyText: {
        color: 'white',
      },
      selectedCurrency: {
        backgroundColor: '#007AFF',
      },

})