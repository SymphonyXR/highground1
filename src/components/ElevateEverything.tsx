import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/4915d59e-d5db-49bc-acab-3a1b28ed0d2e.png')`,
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
            Elevate Everything
          </h2>
          <div className="prose prose-invert mx-auto">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              At High Ground we believe that creativity knows no bounds. With the right tools, 
              community and vision, you can Elevate Everything — from your craft to your mindset, 
              from your art to your legacy.
            </p>
          </div>
        </div>

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
            <TabsContent value="content" className="space-y-4">
              {contentSeries?.map((content) => (
                <Card key={content.id} className="bg-black/40 backdrop-blur-sm border-amber-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
                    <p className="text-gray-300">{content.description}</p>
                    <div className="mt-4 text-sm text-amber-400">By {content.creator_name}</div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              {challenges?.map((challenge) => (
                <Card key={challenge.id} className="bg-black/40 backdrop-blur-sm border-amber-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-300">{challenge.description}</p>
                    <div className="mt-4">
                      <span className="text-amber-400 font-medium">Prize: </span>
                      <span className="text-gray-300">{challenge.prize_description}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="programs" className="space-y-4">
              {programs?.map((program) => (
                <Card key={program.id} className="bg-black/40 backdrop-blur-sm border-amber-500/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-300">{program.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-amber-400">{program.program_type}</span>
                      {program.capacity && (
                        <span className="text-sm text-gray-400">
                          Capacity: {program.capacity} spots
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <Card className="bg-black/40 backdrop-blur-sm border-amber-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                    Join Our Community
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                        Elevate Voices
                      </h4>
                      <p className="text-gray-300">
                        A platform for emerging creators to share their stories and showcase their work.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                        Elevate Together
                      </h4>
                      <p className="text-gray-300">
                        Collaborate on community-led projects and shape the future of creativity.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                        Elevate Festival
                      </h4>
                      <p className="text-gray-300">
                        Annual celebration of creativity, innovation, and community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </section>
  );
};
