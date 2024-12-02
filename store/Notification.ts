import { atom } from "recoil";

export const notificationFilterList = ["전체", "작업", "에러"];

export type NotificationFilter = {
  page: number;
  size: number;
  filter: string;
};

export const initialNotificationFilter: NotificationFilter = {
  page: 0,
  size: 10,
  filter: "전체",
};

export const notificationFilter = atom<NotificationFilter>({
  key: "notificationFilter",
  default: initialNotificationFilter,
});
