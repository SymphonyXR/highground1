import { Card, CardContent } from "@/components/ui/card";

interface Tip {
  id: string;
  title: string;
  content: string;
}

export const TipsGrid = ({ tips }: { tips: Tip[] }) => {
  return (
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
  );
};