import Link from "next/link";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import DropdownContent from "./DropdownContent";
import { ChevronDown } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import { cn } from "@/lib/utils";


// Define types for the component props
interface SubmenuItem {
  label: string;
  href: string;
}

interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

interface MenuItemProps {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional, as some items might not have a submenu
  onToggle?: () => void; // Optional, used for toggling dropdown
  active: boolean; // Whether the item is active or not
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional, to control the drawer state
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  nestedMenu,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const handleClick = () => {
    // Blur the active element to lose focus
    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();
  };

  const closeMenu = () => {
    if (nestedMenu !== undefined) {
      setIsDrawerOpen?.(true);
    } else {
      setIsDrawerOpen?.(false);
    }
  };

  return (
    <li className="lg:h-[78px] lg:flex">
      <div className="nav_item_content relative flex items-center w-full justify-between border-b border-[#cacaca] h-12 lg:border-none lg:h-auto">
        <Link
          href={href}
          className={cn(
            active && "active",
            "text-[#243045]",
            "w-full",
            "text-[14px]",
            "leading-[20px]",
            "font-normal",
            "px-4",
            "flex",
            "items-center",
            "lg:px-[0.7rem]",
            "group"
          )}
          onClick={() => {
            closeMenu();
            handleClick();
          }}
        >
          {label}
          {nestedMenu && (
            <>
              &nbsp;&nbsp;
              <ChevronDown
                size={14}
                className="hidden lg:block transform group-hover:rotate-180 transition-transform duration-200"
              />
            </>
          )}
        </Link>

        {nestedMenu && (
          <button
            className="px-3 border-none bg-white flex items-center lg:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? "true" : "false"}
          >
            {active ? <FaMinus />
: <FaPlus/> }
          </button>
        )}
      </div>
      {nestedMenu && (
        <div
          role="menu"
          className={`dropdown lg:absolute lg:left-0 lg:top-[75px] lg:w-full lg:border-b lg:border-[#cacaca)] lg:rounded-b-[16px] lg:pt-8 lg:pb-8 lg:invisible lg:z-20 ${
            active ? "h-auto" : "h-0 overflow-hidden lg:h-auto border-t"
          }`}
        >
          <MaxWidthWrapper>
            <DropdownContent
              submenuscontent={nestedMenu}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </MaxWidthWrapper>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
