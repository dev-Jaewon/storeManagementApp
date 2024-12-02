import { getNotification } from "@/src/util/api";
import { useQuery } from "@tanstack/react-query";

export const useNotificationApi = () => {
  const { data: notification } = useQuery({
    queryKey: ["notification"],
    queryFn: getNotification,
    initialData: [],
  });

  return notification;
};
