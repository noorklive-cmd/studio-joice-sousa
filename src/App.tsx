import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Positioning } from "./components/sections/Positioning";
import { Booking } from "./components/sections/Booking";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <Booking />
      </main>
      <WhatsAppButton />
    </div>
  );
}
