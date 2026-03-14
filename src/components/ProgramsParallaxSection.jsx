import { Link } from "react-router-dom";
import { programGroups } from "../data/programs";

function ProgramsParallaxSection() {
  return (
    <section className="programs-parallax" aria-labelledby="programs-title">
      <div className="programs-overlay" />
      <div className="programs-inner">
        <h2 id="programs-title" className="programs-main-title">
          Programi i zanimanja
        </h2>

        {programGroups.map((group) => (
          <div key={group.title} className="programs-group">
            <h3>{group.title}</h3>
            <div className="programs-grid">
              {group.items.map((item) => (
                <article key={item.slug} className="program-card">
                  <span className="program-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p>{item.name}</p>
                  <Link to={`/zanimanja/${item.slug}`} className="program-card-link">
                    Pogledaj detalje
                  </Link>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="programs-all-link-wrap">
          <Link to="/zanimanja" className="programs-all-link">
            Prikaži sva zanimanja
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsParallaxSection;
