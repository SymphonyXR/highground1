import { Card, CardContent } from "@/components/ui/card";

export const CommunityTab = () => {
  return (
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
  );
};