import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold" style={{ color: '#e69b00' }}>
            High Ground
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <audio
              ref={audioRef}
              autoPlay
              loop
              muted={isMuted}
              className="hidden"
              src="https://example.com/your-audio-file.mp3"
            />
            <input 
              type="checkbox" 
              name="check-toggle" 
              id="checkbox" 
              hidden 
              checked={!isMuted}
              onChange={toggleMute}
            />
            <label htmlFor="checkbox" className="toggle">
              <div className="toggle__switch">
                <div className="toggle__circle"></div>
              </div>
            </label>
            {[
              ["Events", "#"],
              ["Mixshow", "/mixshow"],
              ["Community", "#"],
              ["Blog", "#"]
            ].map(([item, path]) => (
              <Link
                key={item}
                to={path}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </Link>
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