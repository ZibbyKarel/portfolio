export type Locale = "en" | "cs";

export type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

export type Dictionary = {
  nav: {
    about: string;
    experience: string;
    stack: string;
    services: string;
    zibby: string;
    contact: string;
  };
  langToggle: string;
  hero: {
    name: string;
    role: string;
    tagline: string;
    downloadCv: string;
    scrollCue: string;
  };
  about: {
    title: string;
    body: string;
    photoAlt: string;
  };
  timeline: {
    title: string;
    expandHint: string;
    careerTitle: string;
    educationTitle: string;
    career: TimelineEntry[];
    education: TimelineEntry[];
  };
  skills: {
    title: string;
    groups: { label: string; items: string[] }[];
  };
  services: {
    title: string;
    cards: {
      frontend: { title: string; body: string; link: string };
      websites: {
        title: string;
        body: string;
        caseTitle: string;
        caseDescription: string;
        caseLink: string;
      };
      photography: { title: string; body: string; link: string };
      zibby: { title: string; body: string; link: string };
    };
  };
  zibby: {
    title: string;
    acronym: string;
    body: string;
    terminalLines: string[];
  };
  contact: {
    title: string;
    lead: string;
    form: {
      name: string;
      email: string;
      message: string;
      inquiryType: string;
      inquiryOptions: { value: string; label: string }[];
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    directTitle: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      stack: "Stack",
      services: "What I do",
      zibby: "Z.I.B.B.Y",
      contact: "Contact",
    },
    langToggle: "Switch language",
    hero: {
      name: "Karel Zíbar",
      role: "Senior Frontend Developer",
      tagline:
        "12+ years building web applications used by thousands of users — now building my own AI agent OS on the side.",
      downloadCv: "Download CV",
      scrollCue: "scroll",
    },
    about: {
      title: "About me",
      body: "I'm a frontend developer who's spent over a decade shipping production UI — including at two companies that went on to reach unicorn status (Rohlik.cz, Mews). These days I'm expanding into backend and leaning hard into AI-assisted development. Outside of client work, I shoot photography and build custom websites for small businesses, and I'm currently building my own agentic OS, Z.I.B.B.Y.",
      photoAlt: "Portrait of Karel Zíbar",
    },
    timeline: {
      title: "Experience",
      expandHint: "Select an entry to see highlights",
      careerTitle: "Career",
      educationTitle: "Education",
      career: [
        {
          period: "05/2023 – 04/2026",
          role: "Senior Front-end Developer",
          company: "Mews",
          bullets: [
            "Reservations team on a property management system used by large hotel chains — the full reservation lifecycle from creation through edits and splitting to cancellation",
            "Built a complex, highly interactive UI that hotel staff use to work with large volumes of reservations",
            "Led the refactor of one of the most critical parts of the system — the real-time reservations timeline for large hotels — focused on performance: virtualization, lazy loading and architectural changes to handle very large data sets",
            "Embedded with other teams as a front-end specialist — automations and architectural changes that cut new-feature delivery down to weeks",
            "Mentored junior developers across teams, ran technical interviews for front-end roles and drove AI adoption in the dev workflow",
          ],
        },
        {
          period: "05/2018 – 05/2023",
          role: "Senior Front-end Developer",
          company: "Rohlik.cz",
          bullets: [
            "Customer-facing side of the Rohlik.cz e-commerce platform — owned key parts of the app including checkout and payment gateway integrations",
            "Multi-tenant architecture supporting multiple markets and deployments",
            "Large-scale refactors, performance optimization and gradual modernization of the front-end stack",
            "Automated order-delivery processes and kept strong test coverage with unit and end-to-end tests",
            "Ran technical trainings and shared front-end best practices with the team and developers across the company",
          ],
        },
        {
          period: "06/2016 – 04/2018",
          role: "Web & App Developer",
          company: "S9Y",
          bullets: [
            "Multi-client agency work — React, React Native, GraphQL, Node.js, PHP/Nette",
            "Clients: Trivi (accounting), Covergo (insurance), Workpress Aviation (production system)",
          ],
        },
        {
          period: "07/2014 – 06/2016",
          role: "Fullstack JavaScript Developer",
          company: "Socialbakers",
          bullets: [
            "Social media analytics platform — React, Redux, Node.js, CoffeeScript",
          ],
        },
      ],
      education: [
        {
          period: "2014 – 2017",
          role: "Master's degree (Ing.) — Software Engineering",
          company: "University of West Bohemia, Pilsen",
          bullets: [
            "Faculty of Applied Sciences, Department of Computer Science and Engineering",
          ],
        },
        {
          period: "2011 – 2014",
          role: "Bachelor's degree (Bc.) — Computer Science",
          company: "University of West Bohemia, Pilsen",
          bullets: [
            "Faculty of Applied Sciences, Department of Computer Science and Engineering",
          ],
        },
        {
          period: "2008 – 2011",
          role: "Secondary school",
          company: "Gymnázium Sušice",
          bullets: [],
        },
      ],
    },
    skills: {
      title: "Stack",
      groups: [
        {
          label: "Core",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "Tanstack",
            "Tailwind",
            "Node.js",
            "Playwright",
            "Jest",
          ],
        },
        {
          label: "Delivery & tooling",
          items: [
            "Nx",
            "Unit/E2E testing",
            "CI/CD",
            "Automation",
            "Docker",
            "Web hooks",
          ],
        },
        {
          label: "Branching out",
          items: ["Java/Spring", "PHP/Symfony", "AI Agents orchestrace"],
        },
      ],
    },
    services: {
      title: "What I do",
      cards: {
        frontend: {
          title: "Frontend Engineering",
          body: "The core craft: 12+ years of production React, TypeScript and performance work for products used by millions.",
          link: "See the track record",
        },
        websites: {
          title: "Custom Websites",
          body: "Bespoke sites for small businesses — designed, built and shipped end to end.",
          caseTitle: "jachim-kucera-tesarstvi.cz",
          caseDescription:
            "Site for a carpentry business — from design to deploy.",
          caseLink: "Visit the site",
        },
        photography: {
          title: "Photography",
          body: "I shoot — and I built and run kzphoto.cz to show the work, which makes it another custom-site example too.",
          link: "kzphoto.cz",
        },
        zibby: {
          title: "AI Agents / Z.I.B.B.Y",
          body: "Hands-on agent engineering — building my own agentic OS to learn what AI-native software should feel like.",
          link: "Meet Z.I.B.B.Y",
        },
      },
    },
    zibby: {
      title: "Z.I.B.B.Y",
      acronym: "Zestful Intuitive Brainy Butler for You",
      body: "I'm building Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — my own agentic OS for everyday tasks. It's where I experiment with what AI-native software actually feels like to use.",
      terminalLines: [
        "$ zibby boot",
        "loading agents… ok",
        "loading memory… ok",
        "» Good morning, Karel. 3 tasks queued.",
        "$ zibby run daily-brief",
        "» Done. Anything else?",
      ],
    },
    contact: {
      title: "Contact",
      lead: "Have a project, a role, or just a question? Write me.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        inquiryType: "Type of inquiry",
        inquiryOptions: [
          { value: "job", label: "Job opportunity" },
          { value: "website", label: "Custom website" },
          { value: "photography", label: "Photography" },
          { value: "other", label: "Other" },
        ],
        submit: "Send message",
        sending: "Sending…",
        success: "Message sent. I'll get back to you soon.",
        error: "Sending failed. Email me directly instead.",
      },
      directTitle: "Or reach me directly",
    },
    footer: {
      tagline: "Built with Next.js — and a butler named Z.I.B.B.Y.",
      rights: "Karel Zíbar",
    },
  },
  cs: {
    nav: {
      about: "O mně",
      experience: "Zkušenosti",
      stack: "Stack",
      services: "Co dělám",
      zibby: "Z.I.B.B.Y",
      contact: "Kontakt",
    },
    langToggle: "Přepnout jazyk",
    hero: {
      name: "Karel Zíbar",
      role: "Senior Frontend Developer",
      tagline:
        "12+ let stavím webové aplikace používané i tisíci uživately — a vedle toho si stavím vlastní AI agentní OS.",
      downloadCv: "Stáhnout životopis",
      scrollCue: "scroll",
    },
    about: {
      title: "O mně",
      body: "Jsem frontend vývojář, který přes deset let dodává produkční UI — mimo jiné pro dvě firmy, které se staly unicorny (Rohlik.cz, Mews). Teď rozšiřuju znalosti směrem k backendu a hodně sázím na AI-assisted vývoj. Mimo klientskou práci fotím, tvořím weby na míru pro menší firmy a stavím si vlastní agentní OS jménem Z.I.B.B.Y.",
      photoAlt: "Portrét Karla Zíbara",
    },
    timeline: {
      title: "Zkušenosti",
      expandHint: "Vyber položku a uvidíš detaily",
      careerTitle: "Kariéra",
      educationTitle: "Studium",
      career: [
        {
          period: "05/2023 – 04/2026",
          role: "Senior Front-end Developer",
          company: "Mews",
          bullets: [
            "Tým Reservations v property management systému pro velké hotelové řetězce — celý životní cyklus rezervace od vytvoření přes úpravy a splitování až po zrušení",
            "Vývoj komplexního, vysoce interaktivního rozhraní, které hotelový personál používá při práci s velkým množstvím rezervací",
            "Vedl jsem refaktoring jedné z nejkritičtějších částí systému — real-time timeline rezervací pro velké hotely — s důrazem na výkon: virtualizace, lazy loading a změny architektury pro velmi velké objemy dat",
            "Výpomoc jiným týmům jako front-end specialista — automatizace a architektonické úpravy, díky kterým šla nová funkcionalita vyvinout během několika týdnů",
            "Mentoring juniornějších vývojářů napříč týmy, technické pohovory pro front-end pozice a prosazování AI nástrojů ve vývojářském workflow",
          ],
        },
        {
          period: "05/2018 – 05/2023",
          role: "Senior Front-end Developer",
          company: "Rohlik.cz",
          bullets: [
            "Zákaznická část e-commerce platformy Rohlik.cz — vývoj a údržba klíčových částí aplikace včetně checkoutu a integrace s platebními branami",
            "Multitenantní architektura podporující více trhů a nasazení",
            "Rozsáhlé refaktoringy, optimalizace výkonu a postupná modernizace front-end technologií",
            "Automatizace procesů kolem doručování objednávek a kvalitní testovací pokrytí pomocí unit a end-to-end testů",
            "Technická školení a sdílení front-end best practices s týmem i vývojáři napříč firmou",
          ],
        },
        {
          period: "06/2016 – 04/2018",
          role: "Web & App Developer",
          company: "S9Y",
          bullets: [
            "Agenturní vývoj pro více klientů — React, React Native, GraphQL, Node.js, PHP/Nette",
            "Klienti: Trivi (účetnictví), Covergo (pojišťovnictví), Workpress Aviation (výrobní systém)",
          ],
        },
        {
          period: "07/2014 – 06/2016",
          role: "Fullstack JavaScript Developer",
          company: "Socialbakers",
          bullets: [
            "Platforma pro analytiku sociálních sítí — React, Redux, Node.js, CoffeeScript",
          ],
        },
      ],
      education: [
        {
          period: "2014 – 2017",
          role: "Inženýrské studium (Ing.) — Softwarové inženýrství",
          company: "Západočeská univerzita v Plzni",
          bullets: [
            "Fakulta aplikovaných věd, Katedra informatiky a výpočetní techniky",
          ],
        },
        {
          period: "2011 – 2014",
          role: "Bakalářské studium (Bc.) — Informatika",
          company: "Západočeská univerzita v Plzni",
          bullets: [
            "Fakulta aplikovaných věd, Katedra informatiky a výpočetní techniky",
          ],
        },
        {
          period: "2008 – 2011",
          role: "Středoškolské studium",
          company: "Gymnázium Sušice",
          bullets: [],
        },
      ],
    },
    skills: {
      title: "Stack",
      groups: [
        {
          label: "Jádro",
          items: [
            "TypeScript",
            "React",
            "Next.js",
            "Tanstack",
            "Tailwind",
            "Node.js",
            "Playwright",
            "Jest",
          ],
        },
        {
          label: "Nástroje a delivery",
          items: [
            "Nx",
            "Unit/E2E testování",
            "CI/CD",
            "Automatizace",
            "Docker",
            "Web hooky",
          ],
        },
        {
          label: "Kam rostu",
          items: ["Java/Spring", "PHP/Symfony", "AI Agents orchestrace"],
        },
      ],
    },
    services: {
      title: "Co dělám",
      cards: {
        frontend: {
          title: "Frontend engineering",
          body: "Základní řemeslo: 12+ let produkčního Reactu, TypeScriptu a ladění výkonu pro produkty s miliony uživatelů.",
          link: "Mrkni na trajektorii",
        },
        websites: {
          title: "Weby na míru",
          body: "Weby pro menší firmy — od návrhu přes vývoj až po nasazení.",
          caseTitle: "jachim-kucera-tesarstvi.cz",
          caseDescription: "Web pro tesařskou firmu — od designu po provoz.",
          caseLink: "Otevřít web",
        },
        photography: {
          title: "Fotografie",
          body: "Fotím — a web kzphoto.cz, kde fotky vystavuju, jsem si postavil sám. Takže je to zároveň další ukázka webu na míru.",
          link: "kzphoto.cz",
        },
        zibby: {
          title: "AI agenti / Z.I.B.B.Y",
          body: "Agentní inženýrství v praxi — stavím si vlastní agentní OS, abych zjistil, jak se má AI-native software doopravdy chovat.",
          link: "Seznam se se Z.I.B.B.Y",
        },
      },
    },
    zibby: {
      title: "Z.I.B.B.Y",
      acronym: "Zestful Intuitive Brainy Butler for You",
      body: "Stavím si Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — vlastní agentní OS pro každodenní úkoly. Je to prostor, kde zkouším, jak má AI-native software skutečně fungovat.",
      terminalLines: [
        "$ zibby boot",
        "načítám agenty… ok",
        "načítám paměť… ok",
        "» Dobré ráno, Karle. Ve frontě jsou 3 úkoly.",
        "$ zibby run daily-brief",
        "» Hotovo. Ještě něco?",
      ],
    },
    contact: {
      title: "Kontakt",
      lead: "Máš projekt, nabídku, nebo jen otázku? Napiš mi.",
      form: {
        name: "Jméno",
        email: "E-mail",
        message: "Zpráva",
        inquiryType: "Typ poptávky",
        inquiryOptions: [
          { value: "job", label: "Pracovní nabídka" },
          { value: "website", label: "Web na míru" },
          { value: "photography", label: "Fotografie" },
          { value: "other", label: "Jiné" },
        ],
        submit: "Odeslat zprávu",
        sending: "Odesílám…",
        success: "Zpráva odeslána. Brzy se ozvu.",
        error: "Odeslání selhalo. Napiš mi prosím rovnou na e-mail.",
      },
      directTitle: "Nebo napřímo",
    },
    footer: {
      tagline: "Postaveno na Next.js — s butlerem jménem Z.I.B.B.Y.",
      rights: "Karel Zíbar",
    },
  },
};

export const contactInfo = {
  email: "zibbykarel@gmail.com",
  phone: "+420 722 616 617",
  phoneHref: "+420722616617",
  linkedin: "https://www.linkedin.com/in/karel-z%C3%ADbar-36970498",
  linkedinLabel: "/in/karel-zíbar-36970498",
  github: "https://github.com/ZibbyKarel",
  githubLabel: "/ZibbyKarel",
  githubUser: "ZibbyKarel",
};
