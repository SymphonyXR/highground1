import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

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
          <div className="text-2xl font-bold text-[#FDE1D3]">
            High Ground
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {/* Audio Player */}
            <div className="flex items-center mr-4">
              <audio
                ref={audioRef}
                autoPlay
                loop
                muted={isMuted}
                className="hidden"
                // Replace this URL with your actual audio file
                src="https://example.com/your-audio-file.mp3"
              />
              <div className="round">
                <input
                  type="checkbox"
                  checked={!isMuted}
                  onChange={toggleMute}
                  id="onoff"
                />
                <label htmlFor="onoff" className="back">
                  <span className="but">
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                  </span>
                </label>
              </div>
            </div>
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