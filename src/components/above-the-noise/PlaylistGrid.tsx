import { Card, CardContent } from "@/components/ui/card";

interface Playlist {
  id: string;
  title: string;
  theme: string;
  thumbnail_url: string;
}

export const PlaylistGrid = ({ playlists }: { playlists: Playlist[] }) => {
  return (
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
  );
};