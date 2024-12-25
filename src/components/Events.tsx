import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/event";
import { TimelineEvent } from "./TimelineEvent";
import { EventModal } from "./EventModal";
import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [visibleEvents, setVisibleEvents] = useState<number>(3);
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

  const handleShowMore = () => {
    setVisibleEvents(prev => Math.min(prev + 2, events.length));
  };

  const handleShowLess = () => {
    setVisibleEvents(prev => Math.max(prev - 2, 3));
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
          {events.slice(0, visibleEvents).map((event, index) => (
            <TimelineEvent
              key={event.id}
              event={event}
              index={index}
              onClick={setSelectedEvent}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {visibleEvents > 3 && (
            <Button
              onClick={handleShowLess}
              className="bg-[#FDE1D3] text-black hover:bg-[#FEC6A1] transition-all duration-300"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          )}
          
          {visibleEvents < events.length && (
            <Button
              onClick={handleShowMore}
              className="bg-[#FDE1D3] text-black hover:bg-[#FEC6A1] transition-all duration-300"
            >
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </section>
  );
};