export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 gap-4 p-8 h-full">
          {/* First Column - Moving Up */}
          <div className="space-y-4 animate-float-up">
            <div className="h-1/2 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/d70e16e9-2a91-4285-ad24-1587e2ab86bb.png"
                alt="People dancing and enjoying music"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="h-1/2 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/4c7ab2c2-4e65-4cc1-a0f7-9a5a02af89ad.png"
                alt="Vintage record player with books"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
          
          {/* Center Column - Moving Down */}
          <div className="space-y-4 animate-float-down">
            <div className="h-2/3 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/6ac85483-9a52-4d26-b688-d129dc3af331.png"
                alt="Red vinyl record spinning"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="h-1/3 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/ee3369f5-d12d-4bd6-b7d3-eabdb490c613.png"
                alt="Vintage saxophone illustration"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
          
          {/* Last Column - Moving Up */}
          <div className="space-y-4 animate-float-up">
            <div className="h-1/3 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/30521fe8-df0a-4193-b268-3ee302487c11.png"
                alt="Urban street art scene"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="h-2/3 relative overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/fbfb5590-a9b1-4f73-8140-5c2656a4676f.png"
                alt="Vintage music festival scene"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
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