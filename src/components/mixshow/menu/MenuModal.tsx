import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MenuContent } from "./MenuContent";
import { ShopGrid } from "./ShopGrid";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content?: string;
  type?: "content" | "shop";
}

export const MenuModal = ({ isOpen, onClose, title, content, type = "content" }: MenuModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/90 text-white border-none max-w-2xl">
        {type === "content" ? (
          <MenuContent title={title} content={content || ""} />
        ) : (
          <ShopGrid />
        )}
      </DialogContent>
    </Dialog>
  );
};