import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ElevateHeader } from "./elevate/ElevateHeader";
import { ContentSeriesTab } from "./elevate/ContentSeriesTab";
import { ChallengesTab } from "./elevate/ChallengesTab";
import { ProgramsTab } from "./elevate/ProgramsTab";
import { CommunityTab } from "./elevate/CommunityTab";

export const ElevateEverything = () => {
  const { data: contentSeries } = useQuery({
    queryKey: ["elevateContentSeries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("elevate_content_series")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: challenges } = useQuery({
    queryKey: ["elevateChallenges"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("elevate_challenges")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const { data: programs } = useQuery({
    queryKey: ["elevatePrograms"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("elevate_programs")
        .select("*")
        .order("start_date", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  return (
    <section className="py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url('/lovable-uploads/bf2aad19-a6a1-4c60-81e9-b9f0c53ab7a6.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/40 z-0" />
      
      <div className="container relative z-10">
        <ElevateHeader />

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
            <TabsTrigger value="content" className="data-[state=active]:bg-amber-500">
              Content Series
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-amber-500">
              Creative Challenges
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-amber-500">
              Programs
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-amber-500">
              Community
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[500px] mt-6">
            <TabsContent value="content">
              <ContentSeriesTab contentSeries={contentSeries || []} />
            </TabsContent>

            <TabsContent value="challenges">
              <ChallengesTab challenges={challenges || []} />
            </TabsContent>

            <TabsContent value="programs">
              <ProgramsTab programs={programs || []} />
            </TabsContent>

            <TabsContent value="community">
              <CommunityTab />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </section>
  );
};