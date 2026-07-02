import { existsSync } from "node:fs";
import { join } from "node:path";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "headshot.jpg"));

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About hasPhoto={hasPhoto} />
        {/* Coming in later phases: experience, stack, services, zibby, contact */}
      </main>
    </div>
  );
}
