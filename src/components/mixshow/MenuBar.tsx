import { Link } from "react-router-dom";
import { MenuItem } from "./menu/MenuItem";
import { MenuModal } from "./menu/MenuModal";

interface MenuBarProps {
  selectedModal: string | null;
  setSelectedModal: (modal: string | null) => void;
}

export const MenuBar = ({ selectedModal, setSelectedModal }: MenuBarProps) => {
  const menuItems = [
    {
      title: "About",
      content: "High Ground is a community-driven platform dedicated to elevating music culture through innovative collaborations and creative expression."
    },
    {
      title: "Book a DJ",
      content: "Looking to book a High Ground DJ for your event? Contact us with your event details and we'll match you with the perfect DJ for your vibe."
    },
    {
      title: "Become a High Ground DJ",
      content: "Join our collective of passionate DJs. We're always looking for talented artists who share our vision for pushing musical boundaries."
    }
  ];

  return (
    <div className="bg-black/50 backdrop-blur-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#f7e98e] hover:opacity-80 transition-opacity">
            High Ground
          </Link>
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                onClick={() => setSelectedModal(item.title)}
              />
            ))}
            <MenuItem
              title="Shop"
              onClick={() => setSelectedModal("Shop")}
            />
          </div>
        </nav>
      </div>

      {menuItems.map((item) => (
        <MenuModal
          key={item.title}
          isOpen={selectedModal === item.title}
          onClose={() => setSelectedModal(null)}
          title={item.title}
          content={item.content}
          type="content"
        />
      ))}

      <MenuModal
        isOpen={selectedModal === "Shop"}
        onClose={() => setSelectedModal(null)}
        title="Shop"
        type="shop"
      />
    </div>
  );
};