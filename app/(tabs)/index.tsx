import { Layout } from "@/src/ui/common/Layout";
import { DashbordView } from "@/src/ui/home/DashbordView";
import { AppNotificationHeader } from "@/src/ui/common/AppNotificationHeader";

export default function HomeScreen() {
  return (
    <Layout>
      <AppNotificationHeader />
      <DashbordView />
    </Layout>
  );
}
