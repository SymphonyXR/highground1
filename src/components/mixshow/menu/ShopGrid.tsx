const products = [
  {
    title: "Classic Logo Tee",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "Vinyl Collection",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    title: "Digital Mixtape",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    title: "Producer Pack",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "Studio Time",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "DJ Workshop",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  }
];

export const ShopGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.title} className="bg-black p-4 rounded-lg">
            <div className="aspect-square mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};