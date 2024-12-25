import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

interface Event {
  id: string;
  date: string;
  title: string;
  description: string;
  media_url?: string;
  media_type?: 'image' | 'video';
  content?: string;
}

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;

      // Validate and transform the media_type to ensure it matches our Event interface
      const validatedEvents: Event[] = (data || []).map(event => ({
        ...event,
        media_type: event.media_type === 'image' || event.media_type === 'video' 
          ? event.media_type 
          : undefined
      }));

      setEvents(validatedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24">
      {/* Desert Background with higher opacity overlay */}
      <div 
        className="absolute inset-0 z-0 bg-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4eaeaf66-2e5d-4d59-9234-fc112fb28a94.png')`,
          opacity: 0.2
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#FDE1D3]">
          Upcoming Events
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-start mb-16 last:mb-0">
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
                  onClick={() => setSelectedEvent(event)}
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
          ))}
        </div>
      </div>

      {/* Event Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl bg-black/95 border-orange-900/20 text-orange-100">
          {selectedEvent && (
            <div className="space-y-4">
              {selectedEvent.media_url && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  {selectedEvent.media_type === 'video' ? (
                    <video
                      src={selectedEvent.media_url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={selectedEvent.media_url}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              )}
              <h2 className="text-3xl font-bold text-orange-100">{selectedEvent.title}</h2>
              <div className="prose prose-invert prose-orange max-h-[300px] overflow-y-auto custom-scrollbar">
                <p className="text-lg text-orange-200/70 leading-relaxed">
                  {selectedEvent.content || selectedEvent.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};