import { ScrollArea } from "@/components/ui/scroll-area";

interface Quote {
  id: string;
  content: string;
  author?: string;
}

export const QuotesList = ({ quotes }: { quotes: Quote[] }) => {
  return (
    <ScrollArea className="h-[400px] rounded-md border p-4">
      <div className="space-y-8">
        {quotes?.map((quote) => (
          <div key={quote.id} className="text-center">
            <blockquote className="text-xl italic text-[#FDE1D3]">
              "{quote.content}"
            </blockquote>
            {quote.author && (
              <cite className="block mt-2 text-sm text-[#FEC6A1]">
                — {quote.author}
              </cite>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};