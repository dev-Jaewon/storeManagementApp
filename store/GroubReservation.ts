import { GroubReservationItem as RequestGroubReservationItem } from "@/src/util/typeApi/GroubReservation";
import { atom, selectorFamily } from "recoil";

export type GroubReservationItem = {
  isSelected?: boolean;
  brand?: string;
  category?: string;
  margin?: number;
} & RequestGroubReservationItem;

export type GroubReservation = {
  list: GroubReservationItem[];
};

export const initialGroubReservation: GroubReservation = {
  list: [],
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
      });
    },
});