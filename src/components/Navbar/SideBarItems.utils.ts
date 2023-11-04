import userIcon from "../../assets/usericon.png";
import menu from "../../assets/menu.png";
import sales from "../../assets/sales.png";
import { useTranslation } from "react-i18next";

export const useSidebarItems = () => {
  const { t } = useTranslation();

  return [
    {
      id: "dashboard",
      icon: menu,
      title: t("auth.Dashboard"),
      route: "/admin/dashboard",
    },
    {
      id: "users",
      icon: userIcon,
      title: t("auth.Users"),
      route: "/admin/users",
    },
    {
      id: "sales",
      icon: sales,
      title: t("auth.Sales"),
      route: "/admin/sales",
    },
  ];
};
