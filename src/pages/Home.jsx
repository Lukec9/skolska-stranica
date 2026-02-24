import HeroSection from "../components/HeroSection";
import ProgramsParallaxSection from "../components/ProgramsParallaxSection";
import Sidebar from "../components/sidebar/Sidebar";
import { Carousel, CarouselItem } from "../components/ui/Carousel";
import "../styles/home-carousel.css";

function Home() {
  const highlights = [
    {
      title: "Upisi za školsku godinu 2026/2027",
      description:
        "Otvorene su prijave za upis novih učenika. Prijavite se na vrijeme!",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200",
      link: "#upisi",
    },
    {
      title: "Naši uspjesi",
      description: "Učenici osvajaju nagrade na državnim natjecanjima",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200",
      link: "#uspjesi",
    },
    {
      title: "Moderna oprema",
      description: "Najsuvremenije učionice i laboratoriji za praktičnu nastavu",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
      link: "#oprema",
    },
    {
      title: "Stručni programi",
      description: "Raznovrsni obrazovni programi prilagođeni tržištu rada",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      link: "#programi",
    },
  ];

  return (
    <>
      <HeroSection />
      <div className="home-main-layout">
        <Sidebar className="sidebar home-sidebar" enableTabletCollapse />
        <section className="home-content">
          <div className="content-container">
            <div className="section-header">
              <h2>Istaknuto</h2>
              <p>Najnovije vijesti i događaji iz naše škole</p>
            </div>

            <Carousel options={{ loop: true, duration: 5 }}>
              {highlights.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="highlight-slide">
                    <img src={item.image} alt={item.title} />
                    <div className="highlight-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <a href={item.link} className="highlight-link">
                        Saznaj više →
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>

            <ProgramsParallaxSection />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
