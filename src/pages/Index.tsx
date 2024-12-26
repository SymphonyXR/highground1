import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MixshowEvents } from "@/components/MixshowEvents";
import { MiniBlog } from "@/components/MiniBlog";
import { Events } from "@/components/Events";
import { ElevateEverything } from "@/components/ElevateEverything";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <MixshowEvents />
        <MiniBlog />
        <Events />
        <ElevateEverything />
      </main>
    </div>
  );
};

export default Index;