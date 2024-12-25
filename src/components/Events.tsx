import React from "react";

export const Events = () => {
  const events = [
    {
      date: "March 15, 2024",
      title: "Desert Soundscape",
      description: "An immersive audio experience under the stars"
    },
    {
      date: "April 2, 2024",
      title: "Studio Sessions Vol. 3",
      description: "Collaborative recording session with emerging artists"
    },
    {
      date: "April 20, 2024",
      title: "Vinyl & Vintage",
      description: "Record fair and live performances"
    },
    {
      date: "May 5, 2024",
      title: "Beat Workshop",
      description: "Production masterclass with industry veterans"
    }
  ];

  return (
    <section className="relative py-24">
      {/* Desert Background */}
      <div 
        className="absolute inset-0 z-0 bg-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4eaeaf66-2e5d-4d59-9234-fc112fb28a94.png')`,
          opacity: 0.1
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#FDE1D3]">
          Upcoming Events
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={event.title} className="relative flex items-start mb-16 last:mb-0">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-orange-300/30 -translate-x-1/2" />
              
              {/* Content */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12 ml-auto text-right'}`}>
                {/* Branch */}
                <div 
                  className={`absolute top-8 w-12 h-px bg-orange-300/30 
                    ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}
                />
                
                {/* Node */}
                <div className={`absolute top-7 w-4 h-4 rounded-full bg-orange-400/80 shadow-lg shadow-orange-900/20
                  transform -translate-y-1/2
                  hover:scale-150 transition-transform duration-300
                  ${index % 2 === 0 ? 'right-0 translate-x-full -translate-x-2' : 'left-0 -translate-x-full translate-x-2'}`} 
                />
                
                <div className="bg-orange-900/20 backdrop-blur-sm p-6 rounded-lg border border-orange-400/20
                  transform hover:scale-105 transition-all duration-300
                  hover:bg-orange-800/30">
                  <span className="text-orange-300/80 text-sm font-medium mb-2 block">{event.date}</span>
                  <h3 className="text-[#FDE1D3] text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-orange-100/80">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};