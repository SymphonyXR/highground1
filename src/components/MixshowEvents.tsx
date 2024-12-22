export const MixshowEvents = () => {
  const events = [
    {
      title: "Neon Nights",
      date: "MAR 15",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      artist: "DJ Phantom",
    },
    {
      title: "Analog Dreams",
      date: "MAR 22",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      artist: "Vinyl Queen",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-sm font-bold text-purple-400 mb-2">
                  {event.date}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/80">{event.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};