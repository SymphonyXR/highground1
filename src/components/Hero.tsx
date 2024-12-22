export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/8cee3914-20b9-4f68-999c-7e3c67109381.png"
          alt="Vintage record player floating in clouds"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 bg-clip-text text-transparent animate-fade-in font-serif tracking-wider">
          Timeless Aura
        </h1>
        <p className="text-xl md:text-2xl text-[#FDE1D3] mb-12 font-bold leading-relaxed animate-fade-in max-w-2xl mx-auto font-serif">
          We build spaces where artists thrive. From studio sessions to live shows, High Ground is a place for raw talent lives and grows. Connect with fellow creators, share your sound, and push your art further than you thought possible.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-orange-900/20 backdrop-blur-sm border border-orange-400/20 rounded-lg text-orange-100 hover:bg-orange-800/30 transition-all">
            Explore Events
          </button>
          <button className="px-8 py-3 bg-orange-600/80 rounded-lg text-orange-100 hover:bg-orange-700 transition-all">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
};