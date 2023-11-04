import userIcon from "../../assets/usericon.png";
import menu from "../../assets/menu.png";
import sales from "../../assets/sales.png";

export const sideBarItems = [
  {
    id: "dashboard",
    icon: menu,
    title: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    id: "users",
    icon: userIcon,
    title: "Users",
    route: "/admin/users",
  },
  {
    id: "sales",
    icon: sales,
    title: "Sales",
    route: "/admin/sales",
  },
];
