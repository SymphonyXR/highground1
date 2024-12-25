import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Event } from "@/types/event";

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

export const EventModal = ({ event, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-black/95 border-orange-900/20 text-orange-100">
        <div className="space-y-4">
          {event.media_url && (
            <div className="aspect-video overflow-hidden rounded-lg">
              {event.media_type === 'video' ? (
                <video
                  src={event.media_url}
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={event.media_url}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          )}
          <h2 className="text-3xl font-bold text-orange-100">{event.title}</h2>
          <div className="prose prose-invert prose-orange max-h-[300px] overflow-y-auto custom-scrollbar">
            <p className="text-lg text-orange-200/70 leading-relaxed">
              {event.content || event.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};