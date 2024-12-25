interface MoodBoardItem {
  id: string;
  image_url: string;
  description: string;
}

export const VisualsGrid = ({ items }: { items: MoodBoardItem[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items?.map((item) => (
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
  );
};