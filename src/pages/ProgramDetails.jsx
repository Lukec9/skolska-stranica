import { Link, Navigate, useParams } from "react-router-dom";
import { programsBySlug, sectorsBySlug } from "../data/programs";
import "../styles/program-pages.css";

function ProgramDetails() {
  const { slug } = useParams();
  const program = programsBySlug[slug || ""];

  if (!program) {
    return <Navigate to="/zanimanja" replace />;
  }

  return (
    <article className="program-details-page">
      <nav className="program-details-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Naslovnica</Link>
        <span aria-hidden="true">/</span>
        <Link to="/zanimanja">Zanimanja</Link>
        <span aria-hidden="true">/</span>
        <span>{program.name}</span>
      </nav>

      <header className="program-details-hero">
        <span className="program-details-icon" aria-hidden="true">
          {program.icon}
        </span>
        <div>
          <p className="program-details-overline">Program</p>
          <h1>{program.name}</h1>
          <p>{program.summary}</p>
        </div>
      </header>

      <section
        className="program-details-info-grid"
        aria-label="Ključne informacije"
      >
        <div className="program-details-info-card">
          <h2>Trajanje</h2>
          <p>{program.duration}</p>
        </div>

        <div className="program-details-info-card">
          <h2>Vrsta programa</h2>
          <p>{program.qualification}</p>
        </div>

        <div className="program-details-info-card">
          <h2>Sektor</h2>
          <p>
            {program.sectors
              .map((sectorSlug) => sectorsBySlug[sectorSlug]?.title)
              .filter(Boolean)
              .join(" • ")}
          </p>
        </div>
      </section>

      <section className="program-details-section" aria-labelledby="skills-title">
        <h2 id="skills-title">Što ćeš učiti</h2>
        <ul>
          {program.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="program-details-section" aria-labelledby="careers-title">
        <h2 id="careers-title">Mogući karijerni putovi</h2>
        <ul>
          {program.careerPaths.map((path) => (
            <li key={path}>{path}</li>
          ))}
        </ul>
      </section>

      <section className="program-details-cta" aria-label="Upisi">
        <h2>Zainteresiran/a za ovo zanimanje?</h2>
        <p>Prati informacije o upisima i pripremi dokumentaciju na vrijeme.</p>
        <div className="program-details-cta-actions">
          <a
            href="https://strukovna.com/category/upisi/"
            target="_blank"
            rel="noreferrer"
          >
            Informacije o upisu
          </a>
          <Link to="/zanimanja">Povratak na sva zanimanja</Link>
        </div>
      </section>
    </article>
  );
}

export default ProgramDetails;
