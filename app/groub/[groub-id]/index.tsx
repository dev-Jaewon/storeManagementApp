import { WillNotMobile } from "@/src/ui/common/WillNotMobile";
import { ReservationsView } from "@/src/ui/groubReservation/ReservationsVIew";
import { Platform } from "react-native";
import { Stack } from "expo-router";

const GroubReservationPage = () => {
  if (Platform.OS === "ios" || Platform.OS === "android") {
    return <WillNotMobile />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ReservationsView />
    </>
  );
};

export default GroubReservationPage;
