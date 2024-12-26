import { Event } from "@/types/event";
import { TimelineEvent } from "@/components/TimelineEvent";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface TimelineProps {
  events: Event[];
  selectedEvent: Event | null;
  setSelectedEvent: (event: Event | null) => void;
}

export const Timeline = ({ events, selectedEvent, setSelectedEvent }: TimelineProps) => {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <TimelineEvent 
          key={event.title}
          event={event}
          index={index}
          onClick={setSelectedEvent}
        />
      ))}

      {/* Event Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-black/90 text-white border-orange-400/20">
          {selectedEvent && (
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
              <p className="text-gray-300 mb-4">{selectedEvent.description}</p>
              {selectedEvent.media_url && (
                <img
                  src={selectedEvent.media_url}
                  alt={selectedEvent.title}
                  className="w-full rounded-lg"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};