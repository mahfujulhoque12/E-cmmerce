import { FaUserCircle, FaEdit } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";

import { TbTruckReturn } from "react-icons/tb";
import AccountInfo from "@/components/molecules/account/AccountInfo";
import AccountUpdate from "@/components/molecules/account/AccountUpdate";
import AccountOrders from "./AccountOrders";
import OrderReturn from "./OrderReturn";
import Address from "./Address";
import ChangePassword from './ChangePassword';
import { LiaAddressCard } from "react-icons/lia";
import { RiLockPasswordFill } from "react-icons/ri";


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
  {
    key: "return",
    label: "Rturn Orders",
    icon: <TbTruckReturn  className="text-yellow-400" size={25} />,
    component: <OrderReturn />,
  },
  {
    key: "address",
    label: "Address",
    icon: <LiaAddressCard   className="text-sky-400" size={25} />,
    component: <Address />,
  },
  {
    key: "password",
    label: "Password Change",
    icon: <RiLockPasswordFill    className="text-red-400" size={25} />,
    component: <ChangePassword />,
  },
];
