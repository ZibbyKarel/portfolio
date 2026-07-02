import { existsSync } from "node:fs";
import { join } from "node:path";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Zibby } from "@/components/sections/Zibby";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "headshot.jpg"));
  const hasCaseScreenshot = existsSync(
    join(process.cwd(), "public", "case-tesarstvi.jpg"),
  );

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About hasPhoto={hasPhoto} />
        <Timeline />
        <Skills />
        <Services hasCaseScreenshot={hasCaseScreenshot} />
        <Zibby />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
