"use client";
import { useState, useRef } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { AlignJustify } from "lucide-react";
import MegaMenu from "@/components/molecules/navbar/MegaMenu";
import MobileNavigationDrawer from "@/components/molecules/navbar/MobileNavigationDrawer";
import ContainerBox from "../../layout/ContainerBox";
import UserProfile from "@/components/molecules/navbar/UserProfile";
import NavLogo from "@/components/molecules/navbar/NavLogo";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom";
}
const Navigation = ({ mobileMenuPos = "left" }: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="sticky top-0 right-0 z-40 h-[78px] bg-white border-b shadow-sm flex items-center ">
      <MaxWidthWrapper>
        <ContainerBox
          className="px-3
         md:p-0 lg:p-0 xl:p-0"
        >
          <div className="flex items-center justify-between gap-4 h-[78px]">
            
          <div className="hidden xl:block">
              <MegaMenu />
            </div>
       
            <button
              ref={drawerButtonRef}
              className="border-none h-[45px] w-[45] bg-transparent xl:hidden"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
            >
              {/* Mobile Hamburger menu */}
              <AlignJustify />
            </button>

            <div className="xl:hidden">
              <NavLogo/>
            </div>
            
            <div className="xl:hidden">
              <UserProfile/>
            </div>
            {/* Mobile navigation drawer */}
            <div className="xl:hidden absolute">
              <MobileNavigationDrawer
                {...{
                  isDrawerOpen,
                  setIsDrawerOpen,
                  drawerButtonRef,
                  mobileMenuPos,
                }}
              />
            </div>
          </div>
        </ContainerBox>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navigation;
