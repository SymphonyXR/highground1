export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/78744267-f7e4-471a-9eb1-fa2c0e59bb5a.png"
          alt="Vintage record player with art prints"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 bg-clip-text text-transparent animate-fade-in">
          Where Music Meets Art
        </h1>
        <p className="text-xl md:text-2xl text-[#FDE1D3] mb-12 font-light leading-relaxed animate-fade-in max-w-3xl mx-auto">
          We build spaces where artists thrive. From studio sessions to live shows, High Ground is a place for raw talent to live and grow. Connect with fellow creators, share your sound, and push your art further than you thought possible.
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