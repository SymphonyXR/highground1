import { useState } from "react";
import { Header } from "@/components/Header";
import { Event } from "@/types/event";
import { MiniBlog } from "@/components/MiniBlog";
import { MenuBar } from "@/components/mixshow/MenuBar";
import { MediaPlayer } from "@/components/mixshow/MediaPlayer";
import { Timeline } from "@/components/mixshow/Timeline";

const Mixshow = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const events: Event[] = [
    {
      date: "MAR 15",
      title: "Neon Nights",
      description: "DJ Phantom takes you on a journey through the neon-lit streets of synthwave and retrowave.",
      media_url: "/lovable-uploads/3e6a0b27-fef7-494c-94a4-94ee635c6954.png",
    },
    {
      date: "MAR 22",
      title: "Analog Dreams",
      description: "Vinyl Queen presents a curated selection of classic vinyl cuts and rare grooves.",
      media_url: "/lovable-uploads/96276ff8-ebb1-4204-8d1b-3fa6fd0b3130.png",
    }
  ];

  return (
    <div 
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage: 'url("/lovable-uploads/6028e034-6076-4771-8bb6-a9b9d4c3fd69.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <MenuBar selectedModal={selectedModal} setSelectedModal={setSelectedModal} />

      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Timeline Section */}
          <div className="w-full md:w-2/3">
            <Timeline 
              events={events}
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
            />
          </div>

          {/* Media Player Section */}
          <div className="w-full md:w-1/3">
            <MediaPlayer />
          </div>
        </div>
      </div>

      {/* New Stories Section */}
      <div className="relative py-20 mt-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <MiniBlog />
        </div>
      </div>
    </div>
  );
};

export default Mixshow;