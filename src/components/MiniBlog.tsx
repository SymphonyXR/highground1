import { Card } from "@/components/ui/card";

export const MiniBlog = () => {
  const posts = [
    {
      title: "Al Toque Mix Set",
      description: "DJ Plasma takes us on a journey through Psychedelic Cumbia and Chicha at Lima's newest hotspot. Experience the fusion of traditional Peruvian rhythms with modern electronic elements.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838"
    },
    {
      title: "Andean Nights",
      description: "Live from the heights of Cusco, featuring traditional huayno rhythms blended with contemporary beats. A showcase of Peru's rich musical heritage with zampoñas and charangos.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3"
    },
    {
      title: "Studio Sessions: Mestizo Beats",
      description: "Recorded at High Ground Studios, this set explores the intersection of Peruvian coastal rhythms and electronic music, featuring cajón and traditional guitar samples.",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-white text-center mb-12">🡱🡳</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="bg-black/40 border-none overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="aspect-video relative">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-300 text-sm">{post.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};