import { existsSync } from "node:fs";
import { join } from "node:path";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "headshot.jpg"));

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About hasPhoto={hasPhoto} />
        <Timeline />
        {/* Coming in later phases: stack, services, zibby, contact */}
      </main>
    </div>
  );
}
