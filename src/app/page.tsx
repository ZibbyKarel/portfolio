import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Sections land here phase by phase: hero, about, experience,
            stack, services, zibby, contact */}
      </main>
    </div>
  );
}
