import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Below-the-fold sections are code-split so the animation-heavy hero
// isn't competing with their JS on initial load. They still SSR.
const Timeline = dynamic(() =>
  import("@/components/sections/Timeline").then((m) => m.Timeline),
);
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => m.Skills),
);
const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => m.Services),
);
const Zibby = dynamic(() =>
  import("@/components/sections/Zibby").then((m) => m.Zibby),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact),
);

export default function Home() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "headshot.jpg"));
  const hasCaseScreenshot = existsSync(
    join(process.cwd(), "public", "case-tesarstvi.jpg"),
  );

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="flex-1">
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
