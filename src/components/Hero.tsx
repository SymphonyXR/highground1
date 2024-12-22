export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in">
          Where Music Meets Art
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in">
          Join our community of artists, musicians, and creators
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
            Explore Events
          </button>
          <button className="px-8 py-3 bg-purple-600/80 rounded-lg text-white hover:bg-purple-600 transition-all">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
};