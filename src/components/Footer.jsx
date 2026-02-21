function Footer() {
  const studentNotices = [
    "Raspored dopunske nastave",
    "Termini konzultacija",
    "Natječaji i prijave",
  ];

  const teacherNotices = [
    "Sjednica nastavničkog vijeća",
    "Obrasci i dokumenti",
    "Rokovi za evidenciju",
  ];

  return (
    <footer className="school-footer">
      <div className="school-footer-inner">
        <section className="footer-column">
          <h3>KONTAKT</h3>
          <p>Srednja strukovna škola Antuna Horvata</p>
          <p>Vijenac kardinala Alojzija Stepinca 11, Đakovo</p>
          <p>Telefon: 031/812-317</p>
          <p>Fax: 031/496-739</p>
          <p>E-mail: ured-503@ss-strukovna-ahorvata-dj.skole.hr</p>
        </section>

        <section className="footer-column">
          <h3>OBAVIJESTI ZA UČENIKE</h3>
          <ul>
            {studentNotices.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-column">
          <h3>OBAVIJESTI ZA NASTAVNIKE</h3>
          <ul>
            {teacherNotices.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="school-footer-bottom">
        <div className="footer-socials">
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <a href="#" className="privacy-link">
          Pravila privatnosti
        </a>
      </div>
    </footer>
  );
}

export default Footer;
