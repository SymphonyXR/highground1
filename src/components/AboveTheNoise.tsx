import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <iframe
          src="https://www.youtube.com/embed/e0O9bMkV3KU?autoplay=1&mute=1&loop=1&playlist=e0O9bMkV3KU&controls=0&showinfo=0&playsinline=1"
          allow="autoplay; encrypted-media"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ border: 'none' }}
        />
      </div>

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

          <TabsContent value="playlists" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists?.map((playlist) => (
                <Card key={playlist.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={playlist.thumbnail_url || '/placeholder.svg'}
                      alt={playlist.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{playlist.title}</h3>
                      <p className="text-sm text-muted-foreground">{playlist.theme}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="visuals">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {moodBoard?.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={item.image_url}
                    alt={item.description || ''}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.description && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                      <p className="text-white text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quotes">
            <ScrollArea className="h-[400px] rounded-md border p-4">
              <div className="space-y-8">
                {quotes?.map((quote) => (
                  <div key={quote.id} className="text-center">
                    <blockquote className="text-xl italic text-[#FDE1D3]">
                      "{quote.content}"
                    </blockquote>
                    {quote.author && (
                      <cite className="block mt-2 text-sm text-[#FEC6A1]">
                        — {quote.author}
                      </cite>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shoutouts?.map((shoutout) => (
                <Card key={shoutout.id}>
                  <CardContent className="p-6">
                    {shoutout.photo_url && (
                      <img
                        src={shoutout.photo_url}
                        alt={shoutout.member_name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                    )}
                    <h3 className="text-lg font-semibold text-center mb-2">
                      {shoutout.member_name}
                    </h3>
                    <p className="text-center text-muted-foreground">
                      {shoutout.achievement}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips?.map((tip) => (
                <Card key={tip.id}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};