import { Carousel, CarouselItem } from "../components/ui/Carousel";

function CarouselDemo() {
  const slides = [
    {
      title: "Dobrodošli u našu školu",
      description: "Najbolje obrazovanje za vašu budućnost",
      image:
        "https://strukovna.com/wp-content/uploads/2022/04/cropped-Skola-web.jpg",
    },
    {
      title: "Moderne učionice",
      description: "Opremljene najnovijom tehnologijom",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
    },
    {
      title: "Kvalificirani profesori",
      description: "Iskusni stručnjaci u svojoj oblasti",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    },
    {
      title: "Izvrsni rezultati",
      description: "Naši studenti postižu vrhunske rezultate",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    },
  ];

  return (
    <div style={{ padding: "3rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ color: "var(--accent)", marginBottom: "2rem" }}>
        Carousel Component Demo
      </h1>

      <Carousel options={{ loop: true }}>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="carousel-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="carousel-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>

      <div style={{ marginTop: "4rem" }}>
        <h2 style={{ color: "var(--accent)", marginBottom: "1.5rem" }}>
          Multiple Items per Slide
        </h2>
        <Carousel options={{ loop: true, slidesToScroll: 1, align: "start" }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <CarouselItem key={num} className="carousel-card">
              <div className="news-card">
                <h3>Novost {num}</h3>
                <p>Ovo je kratak opis novosti broj {num}.</p>
                <a href="#" className="card-link">
                  Pročitaj više →
                </a>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselDemo;
