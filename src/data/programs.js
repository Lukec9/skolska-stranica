const programs = [
  {
    slug: "elektroinstalater",
    name: "Elektroinstalater",
    icon: "⚡",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["elektrotehnika-racunarstvo"],
    summary:
      "Program za učenike koji žele raditi na elektroinstalacijama u stambenim i poslovnim objektima.",
    skills: [
      "Izrada i održavanje električnih instalacija",
      "Čitanje i primjena tehničkih nacrta",
      "Siguran rad i zaštita na radu",
      "Osnove mjerenja i ispitivanja instalacija",
    ],
    careerPaths: [
      "Elektroinstalaterski obrt",
      "Tvrtke za održavanje i montažu instalacija",
      "Podrška projektima obnovljivih izvora energije",
    ],
  },
  {
    slug: "tehnicar-za-mehatroniku",
    name: "Tehničar za mehatroniku",
    icon: "🤖",
    duration: "4 godine",
    qualification: "Četverogodišnji strukovni program",
    sectors: ["elektrotehnika-racunarstvo"],
    summary:
      "Spaja strojarstvo, elektrotehniku i automatizaciju za moderne industrijske sustave.",
    skills: [
      "Programiranje i podešavanje automatiziranih sustava",
      "Spajanje senzora, aktuatora i upravljačkih elemenata",
      "Dijagnostika i otklanjanje kvarova",
      "Osnove PLC i digitalnog upravljanja",
    ],
    careerPaths: [
      "Serviser automatiziranih sustava",
      "Tehnička podrška u proizvodnji",
      "Daljnje obrazovanje u tehničkom području",
    ],
  },
  {
    slug: "tehnicar-za-racunarstvo",
    name: "Tehničar za računarstvo",
    icon: "💻",
    duration: "4 godine",
    qualification: "Četverogodišnji strukovni program",
    sectors: ["elektrotehnika-racunarstvo"],
    summary:
      "Program usmjeren na računalne sustave, mreže i osnove razvoja aplikacija.",
    skills: [
      "Administracija računalnih sustava",
      "Osnove programiranja i baza podataka",
      "Mrežne tehnologije i sigurnost",
      "Održavanje računalne opreme",
    ],
    careerPaths: [
      "IT tehnička podrška",
      "Junior mrežni administrator",
      "Nastavak studija iz IT područja",
    ],
  },
  {
    slug: "oblagac-podova-i-zidova",
    name: "Oblagač podova i zidova",
    icon: "🧱",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["graditeljstvo-geodezija-arhitektura"],
    summary:
      "Praktično zanimanje za završne građevinske radove u interijerima i eksterijerima.",
    skills: [
      "Priprema podloga za oblaganje",
      "Polaganje keramičkih i drugih obloga",
      "Precizno mjerenje i rezanje materijala",
      "Kontrola kvalitete izvedenih radova",
    ],
    careerPaths: [
      "Građevinske tvrtke",
      "Specijalizirani obrt za završne radove",
      "Samostalno poduzetništvo",
    ],
  },
  {
    slug: "soboslikar-licilac-dekorater",
    name: "Soboslikar-ličilac-dekorater",
    icon: "🎨",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["graditeljstvo-geodezija-arhitektura"],
    summary:
      "Program za estetsko i funkcionalno uređenje prostora kroz završne dekorativne tehnike.",
    skills: [
      "Priprema zidnih i stropnih površina",
      "Soboslikarski i ličilački radovi",
      "Primjena dekorativnih tehnika",
      "Izrada završne zaštite površina",
    ],
    careerPaths: [
      "Soboslikarsko-ličilački obrt",
      "Tvrtke za uređenje interijera",
      "Rad na građevinskim projektima obnove",
    ],
  },
  {
    slug: "agrotehnicar",
    name: "Agrotehničar",
    icon: "🌱",
    duration: "4 godine",
    qualification: "Četverogodišnji strukovni program",
    sectors: ["poljoprivreda-prehrana-veterina"],
    summary:
      "Usmjeren na suvremenu biljnu proizvodnju, agrotehniku i održivo upravljanje resursima.",
    skills: [
      "Planiranje i organizacija poljoprivredne proizvodnje",
      "Primjena agrotehničkih mjera",
      "Osnove zaštite bilja i tla",
      "Praćenje kvalitete i prinosa",
    ],
    careerPaths: [
      "Poljoprivredna gospodarstva",
      "Agroindustrija i savjetodavne službe",
      "Nastavak obrazovanja u agro području",
    ],
  },
  {
    slug: "cvjecar",
    name: "Cvjećar",
    icon: "🌸",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["poljoprivreda-prehrana-veterina"],
    summary:
      "Kreativno zanimanje koje povezuje hortikulturu, aranžiranje i rad s kupcima.",
    skills: [
      "Prepoznavanje i njega cvjetnih vrsta",
      "Izrada cvjetnih aranžmana",
      "Priprema dekoracija za događanja",
      "Osnove prodaje i prezentacije proizvoda",
    ],
    careerPaths: [
      "Cvjećarnice i vrtni centri",
      "Dekoraterske usluge za događanja",
      "Samostalni obrt",
    ],
  },
  {
    slug: "fitomedicinski-tehnicar",
    name: "Fitomedicinski tehničar",
    icon: "🌿",
    duration: "4 godine",
    qualification: "Četverogodišnji strukovni program",
    sectors: ["poljoprivreda-prehrana-veterina"],
    summary:
      "Program fokusiran na zaštitu bilja, zdravu proizvodnju i održivu poljoprivredu.",
    skills: [
      "Prepoznavanje bolesti i štetnika",
      "Primjena mjera zaštite bilja",
      "Praćenje fitosanitarnih standarda",
      "Savjetovanje o održivim rješenjima",
    ],
    careerPaths: [
      "Poljoprivredne ljekarne i savjetodavne službe",
      "Agro tvrtke i distributeri",
      "Nastavak obrazovanja u agronomiji",
    ],
  },
  {
    slug: "mesar",
    name: "Mesar",
    icon: "🔪",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["poljoprivreda-prehrana-veterina"],
    summary:
      "Program za obradu mesa, pripremu proizvoda i poštivanje standarda kvalitete i higijene.",
    skills: [
      "Obrada i rasijecanje mesa",
      "Priprema mesnih prerađevina",
      "Kontrola higijenskih standarda",
      "Skladištenje i čuvanje proizvoda",
    ],
    careerPaths: ["Mesarska proizvodnja", "Prehrambena industrija", "Vlastiti obrt"],
  },
  {
    slug: "pekar-slasticar",
    name: "Pekar-slastičar/pekarica-slastičarka",
    icon: "🥐",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["poljoprivreda-prehrana-veterina"],
    summary:
      "Zanimanje koje objedinjuje izradu pekarskih i slastičarskih proizvoda.",
    skills: [
      "Priprema tijesta i pekarskih proizvoda",
      "Osnove slastičarskih tehnika",
      "Rad s profesionalnom opremom",
      "Standardi kvalitete i higijene",
    ],
    careerPaths: [
      "Pekarnice i slastičarnice",
      "Prehrambena industrija",
      "Otvaranje vlastitog obrta",
    ],
  },
  {
    slug: "kuhar",
    name: "Kuhar",
    icon: "🍳",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["ugostiteljstvo-turizam"],
    summary:
      "Priprema učenike za profesionalni rad u kuhinjama restorana, hotela i drugih ugostiteljskih objekata.",
    skills: [
      "Priprema toplih i hladnih jela",
      "Planiranje menija i normiranje",
      "Organizacija rada u kuhinji",
      "Poštivanje HACCP i higijenskih pravila",
    ],
    careerPaths: [
      "Restorani i hoteli",
      "Catering i event kuhinje",
      "Nastavak školovanja u gastronomiji",
    ],
  },
  {
    slug: "automehatronicar",
    name: "Automehatroničar",
    icon: "🚗",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["strojarstvo-brodogradnja-metalurgija"],
    summary: "Kombinira automehaniku, elektroniku i dijagnostiku modernih vozila.",
    skills: [
      "Dijagnostika elektroničkih sustava vozila",
      "Servisiranje mehaničkih sklopova",
      "Korištenje dijagnostičkih alata",
      "Održavanje sigurnosnih sustava vozila",
    ],
    careerPaths: [
      "Auto servisi",
      "Ovlašteni servisni centri",
      "Specijalizirani dijagnostički servisi",
    ],
  },
  {
    slug: "mehanicar-poljoprivredne-mehanizacije",
    name: "Mehaničar poljoprivredne mehanizacije",
    icon: "🚜",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: [
      "strojarstvo-brodogradnja-metalurgija",
      "poljoprivreda-prehrana-veterina",
    ],
    summary: "Program za održavanje i popravak poljoprivrednih strojeva i opreme.",
    skills: [
      "Servis i popravak traktora i priključaka",
      "Mehanička i osnovna električna dijagnostika",
      "Preventivno održavanje strojeva",
      "Siguran rad u radionici i na terenu",
    ],
    careerPaths: [
      "Servisi poljoprivredne mehanizacije",
      "Poljoprivredna poduzeća",
      "Samostalni servisni obrt",
    ],
  },
  {
    slug: "operater-za-strojne-obrade",
    name: "Operater za strojne obrade",
    icon: "⚙",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["strojarstvo-brodogradnja-metalurgija"],
    summary:
      "Usmjeren na rad na konvencionalnim i CNC strojevima te kontrolu kvalitete obrade.",
    skills: [
      "Rukovanje strojevima za obradu metala",
      "Osnove CNC tehnologije",
      "Čitanje tehničke dokumentacije",
      "Mjerenje i kontrola obradaka",
    ],
    careerPaths: [
      "Proizvodni pogoni",
      "Metaloprerađivačka industrija",
      "CNC operater u specijaliziranim radionicama",
    ],
  },
  {
    slug: "tehnicar-u-strojarstvu",
    name: "Tehničar u strojarstvu",
    icon: "🛠",
    duration: "4 godine",
    qualification: "Četverogodišnji strukovni program",
    sectors: ["strojarstvo-brodogradnja-metalurgija"],
    summary:
      "Program za planiranje, konstruiranje i vođenje procesa u strojarskom okruženju.",
    skills: [
      "Tehničko crtanje i modeliranje",
      "Osnove konstruiranja strojnih dijelova",
      "Organizacija proizvodnih procesa",
      "Praćenje kvalitete i učinkovitosti",
    ],
    careerPaths: [
      "Tehnički odjeli proizvodnih tvrtki",
      "Priprema i planiranje proizvodnje",
      "Nastavak obrazovanja u strojarstvu",
    ],
  },
  {
    slug: "fotograf",
    name: "Fotograf",
    icon: "📷",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["usluge"],
    summary:
      "Kreativno i tehničko zanimanje usmjereno na snimanje, obradu i prezentaciju fotografija.",
    skills: [
      "Rad s fotografskom opremom",
      "Kompozicija i osvjetljenje",
      "Digitalna obrada fotografije",
      "Priprema materijala za tisak i web",
    ],
    careerPaths: [
      "Foto studiji",
      "Marketinške i medijske agencije",
      "Freelance fotografija",
    ],
  },
  {
    slug: "frizer",
    name: "Frizer",
    icon: "✂",
    duration: "3 godine",
    qualification: "Trogodišnji strukovni program",
    sectors: ["usluge"],
    summary:
      "Program za njegu i oblikovanje kose uz naglasak na profesionalnu komunikaciju s klijentima.",
    skills: [
      "Šišanje i stiliziranje kose",
      "Bojanje i kemijski tretmani",
      "Higijena i sigurnost rada",
      "Komunikacija i savjetovanje klijenata",
    ],
    careerPaths: ["Frizerski saloni", "Beauty centri", "Vlastiti frizerski obrt"],
  },
];

const sectors = [
  {
    slug: "elektrotehnika-racunarstvo",
    title: "Elektrotehnika i računalstvo",
    description: "Programi usmjereni na elektrotehniku, automatizaciju i IT.",
    programSlugs: [
      "elektroinstalater",
      "tehnicar-za-mehatroniku",
      "tehnicar-za-racunarstvo",
    ],
  },
  {
    slug: "graditeljstvo-geodezija-arhitektura",
    title: "Graditeljstvo, geodezija i arhitektura",
    description: "Zanimanja za završne građevinske i dekoraterske radove.",
    programSlugs: ["oblagac-podova-i-zidova", "soboslikar-licilac-dekorater"],
  },
  {
    slug: "poljoprivreda-prehrana-veterina",
    title: "Poljoprivreda, prehrana i veterina",
    description: "Programi vezani uz agro sektor i prehrambenu proizvodnju.",
    programSlugs: [
      "agrotehnicar",
      "cvjecar",
      "fitomedicinski-tehnicar",
      "mesar",
      "pekar-slasticar",
    ],
  },
  {
    slug: "ugostiteljstvo-turizam",
    title: "Ugostiteljstvo i turizam",
    description: "Programi za profesionalni rad u ugostiteljstvu.",
    programSlugs: ["kuhar"],
  },
  {
    slug: "strojarstvo-brodogradnja-metalurgija",
    title: "Strojarstvo, brodogradnja i metalurgija",
    description: "Strukovni programi za strojarska i proizvodna zanimanja.",
    programSlugs: [
      "automehatronicar",
      "mehanicar-poljoprivredne-mehanizacije",
      "operater-za-strojne-obrade",
      "tehnicar-u-strojarstvu",
    ],
  },
  {
    slug: "usluge",
    title: "Usluge",
    description: "Kreativna i uslužna zanimanja.",
    programSlugs: ["fotograf", "frizer"],
  },
];

const programsBySlug = Object.fromEntries(
  programs.map((program) => [program.slug, program]),
);

const sectorsBySlug = Object.fromEntries(
  sectors.map((sector) => [sector.slug, sector]),
);

const programGroups = sectors.map((sector) => ({
  title: sector.title,
  items: sector.programSlugs
    .map((programSlug) => programsBySlug[programSlug])
    .filter(Boolean)
    .map((program) => ({
      slug: program.slug,
      name: program.name,
      icon: program.icon,
    })),
}));

export { programs, programsBySlug, sectors, sectorsBySlug, programGroups };
