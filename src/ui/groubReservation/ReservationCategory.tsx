import { itemState } from "@/store/GroubReservation";
import { TextInput } from "react-native";
import { useSetRecoilState } from "recoil";

type ReservationCategoryProps = {
  index: number;
};

export const ReservationCategory = ({ index }: ReservationCategoryProps) => {
  const setValue = useSetRecoilState(itemState(index));

  const handleChangeCategory = (category: string) => {
    setValue((currVal) => ({
      ...currVal,
      category: category,
    }));
  };

  return <TextInput onChangeText={handleChangeCategory} />;
};
