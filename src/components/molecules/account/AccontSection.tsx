import { FaUserCircle, FaEdit } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";

import AccountInfo from "@/components/molecules/account/AccountInfo";
import AccountUpdate from "@/components/molecules/account/AccountUpdate";
import AccountOrders from "./AccountOrders";

export const Accountsections = [
  {
    key: "info",
    label: "Account Info",
    icon: <FaUserCircle className="text-blue-500" size={20} />,
    component: <AccountInfo />,
  },
  {
    key: "update",
    label: "Update Profile",
    icon: <FaEdit className="text-green-500" size={20} />,
    component: <AccountUpdate />,
  },
  {
    key: "orders",
    label: "My Orders",
    icon: <FaBorderAll className="text-green-700" size={20} />,
    component: <AccountOrders />,
  },
];
