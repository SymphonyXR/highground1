export const MiniBlog = () => {
  const posts = [
    {
      title: "The Revival of Vinyl",
      excerpt: "Exploring the resurgence of analog sound in digital age",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },
    {
      title: "Underground Scene",
      excerpt: "Meet the artists shaping the future of electronic music",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      title: "Studio Sessions",
      excerpt: "Behind the scenes with emerging producers",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Latest Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-white/70 text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};