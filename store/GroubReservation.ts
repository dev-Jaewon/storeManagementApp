import { GroubReservationItem as RequestGroubReservationItem } from "@/src/util/typeApi/GroubReservation";
import { atom, selectorFamily } from "recoil";
import { Category } from "./category";

export type GroubReservationItem = {
  isSelected?: boolean;
  brand?: string;
  category?: Category;
  margin?: number;
} & RequestGroubReservationItem;

export type GroubReservation = {
  list: GroubReservationItem[];
  common: {
    brand: string;
    country: string;
    weight: string;
    sale: number;
    deliveryPrice: number;
  };
};

export const initialGroubReservation: GroubReservation = {
  list: [],
  common: {
    brand: "",
    country: "JPY",
    weight: "1",
    sale: 3,
    deliveryPrice: 0,
  },
};

export const groubReservation = atom<GroubReservation>({
  key: "groubReservation",
  default: initialGroubReservation,
});

export const itemState = selectorFamily<GroubReservationItem, number>({
  key: "groubReservationItem",
  get:
    (index: number) =>
    ({ get }) => {
      const reservation = get(groubReservation);
      return reservation.list[index];
    },
  set:
    (index: number) =>
    ({ get, set }, newValue) => {
      const reservation = get(groubReservation);
      const updatedList = [...reservation.list] as GroubReservationItem[];

      updatedList[index] = newValue as GroubReservationItem;

      set(groubReservation, {
        list: updatedList,
        common: reservation.common,
      });
    },
});
