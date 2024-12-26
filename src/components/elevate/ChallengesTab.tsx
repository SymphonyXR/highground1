import { Card, CardContent } from "@/components/ui/card";

export const ChallengesTab = ({ challenges }: { challenges: any[] }) => {
  return (
    <div className="space-y-4">
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
    </div>
  );
};