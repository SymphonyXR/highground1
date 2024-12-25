import React from "react";
import { Event } from "@/types/event";

interface TimelineEventProps {
  event: Event;
  index: number;
  onClick: (event: Event) => void;
}

export const TimelineEvent = ({ event, index, onClick }: TimelineEventProps) => {
  return (
    <div className="relative flex items-start mb-16 last:mb-0">
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
        
        <div 
          onClick={() => onClick(event)}
          className="bg-orange-900/20 backdrop-blur-sm p-6 rounded-lg border border-orange-400/20
            transform hover:scale-105 transition-all duration-300 cursor-pointer
            hover:bg-orange-800/30"
        >
          <span className="text-orange-300/80 text-sm font-medium mb-2 block">{event.date}</span>
          <h3 className="text-[#FDE1D3] text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-orange-100/80">{event.description}</p>
        </div>
      </div>
    </div>
  );
};