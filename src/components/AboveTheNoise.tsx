import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PlaylistGrid } from "./above-the-noise/PlaylistGrid";
import { VisualsGrid } from "./above-the-noise/VisualsGrid";
import { QuotesList } from "./above-the-noise/QuotesList";
import { ShoutoutGrid } from "./above-the-noise/ShoutoutGrid";
import { TipsGrid } from "./above-the-noise/TipsGrid";

export const AboveTheNoise = () => {
  const { data: playlists } = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('playlists')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: moodBoard } = useQuery({
    queryKey: ['mood_board'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('mood_board')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: quotes } = useQuery({
    queryKey: ['quotes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: shoutouts } = useQuery({
    queryKey: ['community_shoutouts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('community_shoutouts')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: tips } = useQuery({
    queryKey: ['guides_tips'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('guides_tips')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="relative py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/9f7dcd22-addb-41fe-a7c5-f8d484fd73ce.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0" />
      
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#FDE1D3]">
          Above the Noise
        </h2>
        <p className="text-[#FEC6A1] text-center mb-12 max-w-2xl mx-auto">
          Discover sources of inspiration beyond the distractions. Immerse yourself in curated playlists,
          visual art, and community wisdom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlaylistGrid playlists={playlists || []} />
          <VisualsGrid items={moodBoard || []} />
          <QuotesList quotes={quotes || []} />
          <ShoutoutGrid shoutouts={shoutouts || []} />
          <TipsGrid tips={tips || []} />
        </div>
      </div>
    </section>
  );
};
