import { View, StyleSheet } from "react-native";
import { CommText } from "../common/CommText";
import { LabelInput } from "../common/labelInput";
import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { calculatePrice } from "@/src/util/api";
import { uploadProductInfo } from "@/store/Upload";
import { useRecoilState } from "recoil";
import { debounce } from "lodash";

type CalculatePriceProps = {
  weightPrice: number;
};

export const CalculatePrice = ({ weightPrice }: CalculatePriceProps) => {
  const [uploadInfo, setuploadInfo] = useRecoilState(uploadProductInfo);

  const { data: priceData } = useQuery({
    queryKey: [
      "calculatePrice",
      weightPrice,
      uploadInfo.margin,
      uploadInfo.originPrice,
      uploadInfo.exchangeCurrencyPrice,
    ],
    queryFn: () =>
      calculatePrice({
        weightPrice: weightPrice,
        margin: uploadInfo.margin,
        sellPrice: uploadInfo.originPrice,
        exchangePrice: uploadInfo.exchangeCurrencyPrice,
      }),
  });

  useEffect(() => {
    setuploadInfo((prev) => ({
      ...prev,
      sellPrice: priceData?.sell || 0,
      profit: priceData?.profit || 0,
    }));
  }, [priceData]);

  const handleChangePrice = useMemo(
    () =>
      debounce((text: string) => {
        setuploadInfo({ ...uploadInfo, originPrice: Number(text) });
      }, 500),
    [uploadInfo.originPrice]
  );

  const handleChangeMargin = useMemo(
    () =>
      debounce((text: string) => {
        setuploadInfo({ ...uploadInfo, margin: Number(text) });
      }, 500),
    [uploadInfo.margin]
  );

  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View style={styles.priceInputContainer}>
          <LabelInput
            placeholder="할인가"
            label="할인가"
            onChangeText={(text) =>
              setuploadInfo({ ...uploadInfo, sale: Number(text) })
            }
            value={uploadInfo.sale.toString()}
          />
        </View>
        <View style={styles.priceInputContainer}>
          <LabelInput
            placeholder="마진"
            label="마진"
            onChangeText={(text) => handleChangeMargin(text)}
            defaultValue={uploadInfo.margin.toString()}
          />
        </View>
      </View>
      <View style={styles.priceInputContainer}>
        <LabelInput
          placeholder="원가"
          label="원가"
          onChangeText={(text) => handleChangePrice(text)}
        />
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.resultRow}>
          <CommText style={styles.resultLabel}>수입가격:</CommText>
          <CommText style={styles.resultValue}>
            {Math.floor(priceData?.in_come_to_korea || 0).toLocaleString()}원
          </CommText>
        </View>
        <View style={styles.resultRow}>
          <CommText style={styles.resultLabel}>판매가:</CommText>
          <CommText style={styles.resultValue}>
            {Math.floor(priceData?.sell || 0).toLocaleString()}원
          </CommText>
        </View>
        <View style={styles.resultRow}>
          <CommText style={styles.resultLabel}>순이익:</CommText>
          <CommText style={styles.resultValue}>
            {Math.floor(priceData?.profit || 0).toLocaleString()}원
          </CommText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  priceContainer: {
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceInputContainer: {
    flex: 1,
  },
  resultContainer: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  resultRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  resultValue: {
    fontSize: 16,
    fontWeight: "600",
  },
});
