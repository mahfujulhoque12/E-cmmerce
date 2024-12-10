import React from "react";

interface AccountButtonProps {
  isActive: boolean;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const AccountButton: React.FC<AccountButtonProps> = ({ isActive, label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 text-gray-800 py-2 px-3 rounded-md ${
        isActive ? "bg-blue-100 font-semibold" : "bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default AccountButton;
