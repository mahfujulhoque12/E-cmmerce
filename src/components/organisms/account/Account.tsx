"use client";
import React, { useState } from "react";
import Profile from "@/components/molecules/account/Profile";
import { Accountsections } from "@/components/molecules/account/AccontSection";
import AccountButton from "@/components/molecules/account/AccountButton";


const Account: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("info");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Section */}
      <div className="basis-full md:basis-[38%] p-4 rounded-md shadow-md border">
        {/* Account Profile */}
        <Profile />

        {/* Navigation Options */}
        <div className="flex flex-col gap-4">
          {Accountsections.map((section) => (
            <AccountButton
              key={section.key}
              isActive={activeSection === section.key}
              label={section.label}
              icon={section.icon}
              onClick={() => setActiveSection(section.key)}
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="basis-full md:basis-[58%] p-4 rounded-md shadow-md border">
        {/* Render the active section component */}
        {Accountsections.find((section) => section.key === activeSection)?.component}
      </div>
    </div>
  );
};

export default Account;
