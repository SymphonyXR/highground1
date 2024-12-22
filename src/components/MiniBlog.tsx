import { useState } from "react";
import { BlogPostDialog } from "./BlogPostDialog";

export const MiniBlog = () => {
  const [selectedPost, setSelectedPost] = useState<null | any>(null);
  
  const posts = [
    {
      title: "The Revival of Vinyl",
      excerpt: "Exploring the resurgence of analog sound in digital age",
      image: "/lovable-uploads/f6fe3779-c9b0-4232-8696-5ca600eda731.png",
    },
    {
      title: "Underground Scene",
      excerpt: "Meet the artists shaping the future of electronic music",
      image: "/lovable-uploads/7cc6fa95-63de-44d3-9895-7cf251017bf4.png",
    },
    {
      title: "Studio Sessions",
      excerpt: "Behind the scenes with emerging producers",
      image: "/lovable-uploads/038d0e28-85fd-4a80-b8c2-75b5cf9e2340.png",
    },
    {
      title: "The Art of Jazz",
      excerpt: "A deep dive into contemporary jazz movements",
      image: "/lovable-uploads/69e75ab4-27a0-4f8d-bff1-501410fb14db.png",
    },
    {
      title: "Beach Vibes Festival",
      excerpt: "Capturing moments from our biggest event yet",
      image: "/lovable-uploads/6fb03dd3-1be0-4748-8ad0-539d40a26787.png",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-100">
          Latest Stories
        </h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-orange-100 mb-2">{post.title}</h3>
                <p className="text-orange-200/70 text-lg">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {selectedPost && (
        <BlogPostDialog
          post={selectedPost}
          isOpen={!!selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};