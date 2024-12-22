export const MixshowEvents = () => {
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
  ];

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
      
      {/* Content section without blur effect */}
      <div className="relative py-20 bg-[#003b00]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FDE1D3]">
            Upcoming Mixshows
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-lg aspect-video hover:scale-[1.02] transition-transform"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003b00]/90 via-[#003b00]/30 to-transparent" />
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
        </div>
      </div>
    </section>
  );
};