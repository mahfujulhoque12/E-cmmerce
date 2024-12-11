import MenuItem from "./MenuItem";


// Define the type for each submenu item
interface SubmenuItem {
  label: string;
  href: string;
}

// Define the type for each nested menu section
interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the type for the main menu item
interface MenuDataItem {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional because not all menu items have nested menus
}

// Correct menuData type to be an array of MenuDataItem

const menuData: MenuDataItem[] = [
  { label: "Kids Furniture", href: "/shop?category=kids-furniture" },

   { label: "Bachelor Furniture", href: "/shop?category=bachelor-furniture" },
   { label: "Leather Furniture", href: "/shop?category=leather-furniture" },

   { label: "Bed Room Furniture", href: "/shop?category=bed-room-furniture" },
  {
  
    label: "House Furniture",
    href: "/shop?category=home-furniture",
    nestedMenu: [
      {
        heading: "Interiors",
        submenu: [
          { label: "House Chair", href: "/shop" },
          {
            label: "House Table",
            href: "/shop",
          },
        
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          {
            label: "House Cabinet",
            href: "/shop",
          },
          { label: "House Sofa", href: "/shop" },
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          { label: "House Waredrobe", href: "#" },
          {
            label: "House Corner Shelf",
            href: "/shop",
          },
        ],
      },
    ],
  },
  {
    label: "Office Furniture ",
    href: "/shop",
    nestedMenu: [
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office Chair", href: "#" },
          {
            label: "Office Sofa",
            href: "/shop",
          },
         
        ],
      },
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office File Cabinet", href: "#" },
          {
            label: "Office Work Station",
            href: "/shop",
          },
 
        ],
      },
      {
        heading: "Design Ideas",
        submenu: [
          { label: "Office Table", href: "/shop" },
          { label: "Office Book Shelf", href: "/shop" },

        ],
      },
    ],
  },


 
  {
    label: "Shop ",
    href: "/shop",
    nestedMenu: [
      {
        heading: "Furniture Category",
        submenu: [
          { label: "House Furniture", href: "#" },
          { label: "Office Furniture",href: "#", },
          { label: "Wall Art & Mirrors",href: "#", },
          { label: "Curtains & Blinds",href: "#", },
          { label: "Rugs & Mats",href: "#", },
          { label: "Lighting Solutions",href: "#", },
          { label: "Compact & Space-Saving Furniture",href: "#",},
        ],
      },

     {
        heading: "Furniture Category",
        submenu: [
          { label: "Multi-Functional Furniture", href: "#" },
          { label: "Rattan & Bamboo Furniture",href: "#", },
          { label: "Leather Furniture",href: "#", },
          { label: "Fabric Furniture",href: "#", },
          { label: "Glass Furniture",href: "#", },
          { label: "Metal Furniture",href: "#", },
          { label: "Wooden Furniture",href: "#",},
        ],
      },

      {
        heading: "Furniture Category",
        submenu: [
          { label: "Luxury Furniture", href: "#" },
          { label: "Scandinavian Furniture",href: "#", },
          { label: "Classic Furniture",href: "#", },
          { label: "Modern Furniture",href: "#", },
          { label: "TV Units & Media Stands",href: "#", },
          { label: "Entryway Furniture",href: "#", },
          { label: "Kid's Furniture",href: "#",},
          { label: "Outdoor Furniture",href: "#",},
        ],
      },

    ],
  },





  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },

];
// Define the props for the MegaMenu component
interface MegaMenuProps {
  handleToggle?: (index: number) => void; // Optional function to handle toggle
  clicked?: number; // Index of the currently clicked item
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul className="xl:flex xl:items-center xl:leading-[50px]">
          {menuData.map(({ label, href, nestedMenu }, index) => {
            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                nestedMenu={nestedMenu}
                setIsDrawerOpen={setIsDrawerOpen}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
