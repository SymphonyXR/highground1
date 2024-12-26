import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

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

  const products = [
    {
      title: "Classic Logo Tee",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Vinyl Collection",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
    {
      title: "Digital Mixtape",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      title: "Producer Pack",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Studio Time",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "DJ Workshop",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
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
              <button
                key={item.title}
                onClick={() => setSelectedModal(item.title)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.title}
              </button>
            ))}
            <button
              onClick={() => setSelectedModal("Shop")}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Shop
            </button>
          </div>
        </nav>
      </div>

      {/* Content Modals */}
      {menuItems.map((item) => (
        <Dialog
          key={item.title}
          open={selectedModal === item.title}
          onOpenChange={() => setSelectedModal(null)}
        >
          <DialogContent className="bg-black/90 text-white border-none max-w-2xl">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-300">{item.content}</p>
          </DialogContent>
        </Dialog>
      ))}

      {/* Shop Modal */}
      <Dialog
        open={selectedModal === "Shop"}
        onOpenChange={() => setSelectedModal(null)}
      >
        <DialogContent className="bg-black/90 text-white border-none max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.title} className="bg-black p-4 rounded-lg">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">{product.title}</h3>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};