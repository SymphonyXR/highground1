import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MixshowEvents } from "@/components/MixshowEvents";
import { MiniBlog } from "@/components/MiniBlog";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <MixshowEvents />
        <MiniBlog />
      </main>
    </div>
  );
};

export default Index;