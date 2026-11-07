import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Positioning } from "./components/sections/Positioning";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <Header />
      <main>
        <Hero />
        <Positioning />
      </main>
      <WhatsAppButton />
    </div>
  );
}
