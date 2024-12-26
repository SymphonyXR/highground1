import { useState } from "react";

const Mixshow = () => {
  const [showMixesPage, setShowMixesPage] = useState(false);

  const playMix = (mixName: string) => {
    console.log(`Playing ${mixName}`);
    setShowMixesPage(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-[350px] bg-[rgba(18,18,18,0.8)] rounded-[25px] p-5 shadow-lg text-white backdrop-blur-lg relative">
        {/* Video Visual */}
        <div className="w-full h-[200px] rounded-[15px] overflow-hidden mb-4">
          <video id="video" muted loop className="w-full h-full object-cover">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Mixshow Button */}
        <button
          onClick={() => setShowMixesPage(true)}
          className="w-full bg-[#7b2a2a] hover:bg-[#a33b3b] text-white text-center py-2.5 rounded-[15px] mt-5 text-base font-bold transition-colors"
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
    </div>
  );
};

export default Mixshow;