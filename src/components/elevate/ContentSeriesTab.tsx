import { Card, CardContent } from "@/components/ui/card";

export const ContentSeriesTab = ({ contentSeries }: { contentSeries: any[] }) => {
  return (
    <div className="space-y-4">
      {contentSeries?.map((content) => (
        <Card key={content.id} className="bg-black/40 backdrop-blur-sm border-amber-500/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{content.title}</h3>
            <p className="text-gray-300">{content.description}</p>
            <div className="mt-4 text-sm text-amber-400">By {content.creator_name}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};