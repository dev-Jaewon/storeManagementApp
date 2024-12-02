import { Layout } from "@/src/ui/common/Layout";
import { NotificationFilter } from "@/src/ui/notification/NotificationFilter";
import { NotificationHeader } from "@/src/ui/notification/NotificationHeader";
import { NotificationView } from "@/src/ui/notification/NotificationView";

const Notification = () => {
  return (
    <Layout>
      <NotificationHeader />
      <NotificationFilter />
      <NotificationView />
    </Layout>
  );
};

export default Notification;
