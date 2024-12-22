import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-[#FDE1D3]">
            High Ground
          </div>
          <nav className="hidden md:flex space-x-8">
            {["Events", "Music", "Community", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};