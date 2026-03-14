import { Link } from "react-router-dom";
import { sectors, programsBySlug } from "../data/programs";
import "../styles/program-pages.css";

function Programs() {
  return (
    <section className="programs-page" aria-labelledby="programs-page-title">
      <header className="programs-page-header">
        <p className="programs-page-overline">Srednja strukovna škola</p>
        <h1 id="programs-page-title">Sva zanimanja</h1>
        <p>
          Pregled zanimanja grupiran po obrazovnim sektorima. Odaberi program i
          otvori detalje.
        </p>
      </header>

      <div className="programs-page-groups">
        {sectors.map((sector) => (
          <section
            key={sector.slug}
            className="programs-page-sector"
            aria-labelledby={`sector-${sector.slug}`}
          >
            <div className="programs-page-sector-head">
              <h2 id={`sector-${sector.slug}`}>{sector.title}</h2>
              <p>{sector.description}</p>
            </div>

            <div className="programs-page-grid">
              {sector.programSlugs.map((programSlug) => {
                const program = programsBySlug[programSlug];

                if (!program) {
                  return null;
                }

                return (
                  <article key={program.slug} className="programs-page-card">
                    <span className="programs-page-icon" aria-hidden="true">
                      {program.icon}
                    </span>
                    <h3>{program.name}</h3>
                    <p>{program.duration}</p>
                    <Link to={`/zanimanja/${program.slug}`}>Pogledaj detalje</Link>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Programs;
