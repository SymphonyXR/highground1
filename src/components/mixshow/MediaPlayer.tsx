import { useState } from "react";

export const MediaPlayer = () => {
  const [showMixesPage, setShowMixesPage] = useState(false);

  const playMix = (mixName: string) => {
    console.log(`Playing ${mixName}`);
    setShowMixesPage(false);
  };

  return (
    <div className="w-[350px] bg-[rgba(18,18,18,0.8)] rounded-[25px] p-5 shadow-lg text-white backdrop-blur-lg relative">
      {/* Video Visual */}
      <div className="w-full h-[200px] rounded-[15px] overflow-hidden mb-4">
        <video id="video" muted loop className="w-full h-full object-cover">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Song Info */}
      <div className="text-center mb-4">
        <div className="text-base font-bold">Song Title - Lorem Ipsum</div>
        <div className="text-sm text-gray-400">Artist - Lorem Ipsum</div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs">0:00</span>
        <input type="range" className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        <span className="text-xs">3:45</span>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-xl hover:text-[#7b2a2a] transition-colors">🔀</button>
        <button className="text-xl hover:text-[#7b2a2a] transition-colors">⏪</button>
        <button className="text-2xl hover:text-[#7b2a2a] transition-colors">▶️</button>
        <button className="text-xl hover:text-[#7b2a2a] transition-colors">⏩</button>
        <button className="text-xl hover:text-[#7b2a2a] transition-colors">🔁</button>
      </div>

      {/* Playlist */}
      <div className="border-t border-gray-700 pt-4 mb-4 max-h-[150px] overflow-y-auto">
        <div className="flex justify-between items-center py-2 border-b border-gray-700">
          <div>
            <div className="text-sm">Song 1</div>
            <div className="text-xs text-gray-400">Artist 1</div>
          </div>
        </div>
      </div>

      {/* Mixshow Button */}
      <button
        onClick={() => setShowMixesPage(true)}
        className="w-full bg-[#7b2a2a] hover:bg-[#a33b3b] text-white text-center py-2.5 rounded-[15px] text-base font-bold transition-colors"
      >
        View Mixshows
      </button>

      {/* Mixes Page */}
      {showMixesPage && (
        <div className="absolute inset-0 bg-[rgba(18,18,18,0.9)] rounded-[25px] p-5 z-10">
          <h2 className="text-center mb-5 text-lg text-white">Select a Mix</h2>
          <div className="grid grid-cols-2 gap-2.5">
            {["Mix 1", "Mix 2", "Mix 3", "Mix 4"].map((mix) => (
              <button
                key={mix}
                onClick={() => playMix(mix)}
                className="bg-[#2a2a2a] hover:bg-[#7b2a2a] text-white rounded-[10px] p-5 text-center transition-colors"
              >
                {mix}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowMixesPage(false)}
            className="w-full bg-[#7b2a2a] hover:bg-[#a33b3b] text-white text-center py-2.5 rounded-[10px] mt-5 transition-colors"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};