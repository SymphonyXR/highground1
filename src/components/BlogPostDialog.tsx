import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  content?: string;
}

interface BlogPostDialogProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogPostDialog = ({ post, isOpen, onClose }: BlogPostDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-black/95 border-orange-900/20 text-orange-100">
        <div className="space-y-4">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-orange-100">{post.title}</h2>
          <div className="prose prose-invert prose-orange max-h-[300px] overflow-y-auto custom-scrollbar">
            <p className="text-lg text-orange-200/70 leading-relaxed">
              {post.content || post.excerpt}
              {/* Adding some sample content for scrolling demonstration */}
              <br /><br />
              The vibrant underground music scene continues to evolve, pushing boundaries and creating new sonic landscapes. Artists from diverse backgrounds come together, sharing their unique perspectives and innovative approaches to sound design and composition.
              <br /><br />
              Through collaborative sessions and experimental performances, these creators are redefining what's possible in modern music production. The energy is palpable, the creativity infectious, and the possibilities endless.
              <br /><br />
              Join us as we explore the depths of artistic expression and witness the birth of new musical movements. Every session is a journey, every performance a story, and every artist a pioneer in their own right.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};