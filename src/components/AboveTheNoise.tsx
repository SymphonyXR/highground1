import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoBackground } from "./above-the-noise/VideoBackground";
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
      <VideoBackground />
      
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#FDE1D3]">
          Above the Noise
        </h2>
        <p className="text-[#FEC6A1] text-center mb-12 max-w-2xl mx-auto">
          Discover sources of inspiration beyond the distractions. Immerse yourself in curated playlists,
          visual art, and community wisdom.
        </p>

        <Tabs defaultValue="playlists" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="visuals">Visuals</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="playlists">
            <PlaylistGrid playlists={playlists || []} />
          </TabsContent>

          <TabsContent value="visuals">
            <VisualsGrid items={moodBoard || []} />
          </TabsContent>

          <TabsContent value="quotes">
            <QuotesList quotes={quotes || []} />
          </TabsContent>

          <TabsContent value="community">
            <ShoutoutGrid shoutouts={shoutouts || []} />
          </TabsContent>

          <TabsContent value="tips">
            <TipsGrid tips={tips || []} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};