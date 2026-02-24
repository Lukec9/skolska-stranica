function ProgramsParallaxSection() {
  const programGroups = [
    {
      title: "Smjerovi prijediplomskog studija",
      items: [
        { name: "Programiranje", icon: "</>" },
        { name: "Računalni sustavi i mreže", icon: "🛰" },
        { name: "Baze podataka i web dizajn", icon: "🛢" },
        { name: "Informacijski sustavi", icon: "🔗" },
      ],
    },
    {
      title: "Smjerovi diplomskog studija",
      items: [
        { name: "Programsko inženjerstvo", icon: "📄" },
        { name: "Računalni sustavi", icon: "⚙" },
        { name: "Ugradbena i prijenosna računala", icon: "💻" },
      ],
    },
    {
      title: "Mikrokvalifikacije",
      items: [
        { name: "Kibernetička sigurnost", icon: "🔒" },
        { name: "Mikrotik akademija", icon: "📶" },
        { name: "Uvod u umjetnu inteligenciju", icon: "🤖" },
        { name: "Objektno orijentirano modeliranje", icon: "🧩" },
      ],
    },
  ];

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
                <article key={item.name} className="program-card">
                  <span className="program-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p>{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsParallaxSection;
