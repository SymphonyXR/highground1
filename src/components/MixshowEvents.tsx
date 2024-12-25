import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export const MixshowEvents = () => {
  const [visibleEvents, setVisibleEvents] = useState(2);
  
  const events = [
    {
      title: "Neon Nights",
      date: "MAR 15",
      image: "/lovable-uploads/3e6a0b27-fef7-494c-94a4-94ee635c6954.png",
      artist: "DJ Phantom",
    },
    {
      title: "Analog Dreams",
      date: "MAR 22",
      image: "/lovable-uploads/96276ff8-ebb1-4204-8d1b-3fa6fd0b3130.png",
      artist: "Vinyl Queen",
    },
    {
      title: "Desert Soundscape",
      date: "MAR 29",
      image: "/lovable-uploads/3e6a0b27-fef7-494c-94a4-94ee635c6954.png",
      artist: "Desert Rose",
    },
    {
      title: "Midnight Echo",
      date: "APR 5",
      image: "/lovable-uploads/96276ff8-ebb1-4204-8d1b-3fa6fd0b3130.png",
      artist: "Echo Chamber",
    },
  ];

  const handleShowMore = () => {
    setVisibleEvents(prev => Math.min(prev + 2, events.length));
  };

  return (
    <section className="relative">
      {/* Desert background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/lovable-uploads/b8fbdcd0-02f3-416c-933b-6d492cd787ea.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      />
      
      {/* Content section without background color overlay */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FDE1D3]">
            Upcoming Mixshows
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.slice(0, visibleEvents).map((event) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-lg aspect-video hover:scale-[1.02] transition-transform"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDE1D3]/60 via-[#FDE1D3]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-sm font-bold text-[#FEC6A1] mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-bold text-[#FDE1D3] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[#FDE1D3]/80">{event.artist}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* More button */}
          {visibleEvents < events.length && (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleShowMore}
                className="bg-[#FDE1D3] text-black hover:bg-[#FEC6A1] transition-all duration-300"
              >
                More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};