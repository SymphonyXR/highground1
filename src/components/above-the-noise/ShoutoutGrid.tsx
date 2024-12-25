import { Card, CardContent } from "@/components/ui/card";

interface Shoutout {
  id: string;
  member_name: string;
  achievement: string;
  photo_url?: string;
}

export const ShoutoutGrid = ({ shoutouts }: { shoutouts: Shoutout[] }) => {
  return (
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
  );
};